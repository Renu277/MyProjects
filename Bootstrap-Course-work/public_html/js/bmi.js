/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    /*below code is for popper*/
    $(function () {
        $('[data-toggle="popover"]').popover({trigger: "hover"}); // this works for popover
    });

    /**
     * 
     * @param {type} height in cm
     * @param {type} weight in kilos
     * @returns {Number} BMI
     */
    function getBmi(height, weight) {
        let height_m = height / 100;
        let calBmi = (weight / Math.pow(height_m, 2.5)) * 1.3;
        return calBmi.toFixed(1);
    }

    /**
     * 
     * @param {type} value   person's height in cm.
     * @param {type} factor  18.5 >> lower bound, 24.9 >> upper bound
     * @returns {Number}     normal weight bound as integer
     */

    function getWeightLimit(value, factor) {
        let limit = (factor / 1.3) * Math.pow(value, 2.5);
        limit = limit.toFixed(0);
        return limit;
    }
    /**
     * 
     * @param {type}     birthyear
     * @returns {Number} age
     */

    function calculateAge(birthyear) {
        let today = new Date();
        let current_year = today.getFullYear();
        let age = current_year - birthyear;
        return age;
    }

    /**
     * 
     * @param {type} title
     * @param {type} body
     * @returns {undefined}
     */

    function errormessage(title, body) {
        $('.modal-title').html(title);
        $('.modal-body').html(body);
        $('.modal').modal('show');
    }

    function validateInput() {
        let year = Number($("#year").val());
        let weight = Number($("#weight").val());
        let height = Number($("#height").val());
        
        if (year !== "" && weight !== "" && height !== "") {
            let age = "";
            if (year !== 0 && weight !== 0 && height !== 0) {
                age = calculateAge(year);
              return true;
                if (age < 20 || age > 60) {
                    errormessage("Note the age", "BMI results are for person aged 20-60.");
                    return false;
                } else {
                    return true;
                }
            } else {
                errormessage("Missing Input", "You need to write all input data.");
                return false;
            }
        } else {
            errormessage("Missing Input", "You need to write all input data.");
            return false;
        }
        age = calculateAge(year);
    }
    $("#calculateBmi").click(function() {
        if (validateInput() === true) {
                let weight = Number($("#weight").val());
                let height = Number($("#height").val());
                console.log(getBmi(height, weight));
                $("#result").html(getBmi(height, weight)); 
                let bmiVal = $("#result").html(getBmi(height, weight)); 
         }

    });

    
});


