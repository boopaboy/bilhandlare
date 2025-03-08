import axios from "axios";
import Car from "../models/Car.js";
import carController from "../controllers/carController.js";

const blocketTokenLink = "https://www.blocket.se/api/adout-api-route/refresh-token-and-validate-session";

const getBlocketToken = async () => {
    const response = await axios.post(blocketTokenLink);
    return response.data.bearerToken;
};

const getCarInfo = async (id) => {
    const token = await getBlocketToken();
    const response = await axios.get(`https://api.blocket.se/search_bff/v2/content/${id}?include=store&include=partner_placements&include=breadcrumbs&include=archived&include=car_condition&include=home_delivery&include=realestate&status=active&status=deleted&status=hidden_by_user`, {
        headers: {
            Host: "api.blocket.se",
            Authorization: `Bearer ${token}`
        }
    });
    
    const carData = blocketObjectToCar(response.data);
    console.log("Transformed Car Data:", carData);

    // Save the car data to MongoDB
    await carController.createCar(carData);
};

const blocketObjectToCar = (blocketObject) => {
    const data = blocketObject.data;
  
    // Find parameter groups by type
    const generalParams = data.parameter_groups.find(g => g.type === "general")?.parameters || [];
    const carParams = data.parameter_groups.find(g => g.type === "car")?.parameters || [];
    
    // Extract mileage and convert to number
    const mileageStr = generalParams.find(p => p.id === "mileage")?.value || "0";
    const miles = Number(mileageStr.replace(/\s/g, ''));
    
    // Extract year
    const yearStr = carParams.find(p => p.id === "search_regdate")?.value || 
                    generalParams.find(p => p.id === "search_regdate")?.value || 
                    generalParams.find(p => p.id === "regdate")?.value || "0";
    const year = Number(yearStr);
    
    // Extract equipment items
    const equipmentItems = data.attributes.find(attr => attr.id === "car_equipment")?.items || [];
    
    return {
      title: data.subject,
      brand: carParams.find(p => p.id === "car_brand")?.value || 
             carParams.find(p => p.id === "cx_make")?.value || "Unknown",
      price: data.price.value,
      year: year,
      miles: miles,
      color: carParams.find(p => p.id === "cx_color")?.value || "Unknown",
      description: data.body,
      items: equipmentItems,
      imageUrl: data.images[0]?.url || "",
      imageArray: data.images.map(img => img.url.replace(".jpg", ".webp?type=3840x2880")) || []
    };
};

// Example usage
getCarInfo(1002398262);