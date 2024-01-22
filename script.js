document.getElementById('mealForm').addEventListener('submit', function(event) { ///ตั้งเงื่อนไขเมื่อถูก Calculate
    event.preventDefault();   
    calculateMealCost();
});


function addFoodItem() {    ///สำหรับเพิ่มรายการอาหาร
    const foodItemDiv = document.createElement('div');
    foodItemDiv.innerHTML = `
        <label>Food Item:</label>
        <input type="text" name="foodItem" required>
        <label>Price:</label>
        <input type="number" name="price" min="0" required>
        <label>Eaters (ใส่ชื่อแล้วตามด้วยเครื่องหมาย , ตามด้วยชื่อต่อไป):</label>
        <input type="text" name="eaters" required>
    `;
    document.getElementById('foodItems').appendChild(foodItemDiv);
}

function calculateMealCost() {      ///คำนวณค่าอาหารโดยการแยกจ่าย    
    var dataFoodItem = document.querySelectorAll('[name="foodItem"]');
    var dataPrice = document.querySelectorAll('[name="price"]');
    var dataEater = document.querySelectorAll('[name="eaters"]');
    var obJectEater = {}         ///เก็บตัวแปร key-value 
    
    
    dataFoodItem.forEach(function(item, index){     ///Loop
        var price = parseFloat(dataPrice[index].value);//เก็บข้อมูลจากuser
        var eaters = dataEater[index].value.split(",").filter(function(name){return name.trim() !== '';}).map(function(name){
           return name.trim();
        });
        
        var costTopay = price/eaters.length;

        eaters.forEach(function(eater){     ///Loop เพื่อเก็บค่าอาหาร
        if(!obJectEater[eater]){
            obJectEater[eater] = 0
        }; 
        obJectEater[eater] += costTopay;
    });
    
       
    });
    // Setting result
        var result = "คำนวณค่าอาหารทั้งหมดที่ต้องจ่าย:\n"
        for(person in obJectEater){
            result += person + ' จ่ายมา: ' + obJectEater[person].toFixed(2) + "บาท\n";
        }
    
    // Display result
    document.getElementById('result').innerText = result ; 
}



