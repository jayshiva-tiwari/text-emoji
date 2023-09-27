// -----------------------------------------------------------------------------------------------encryption function

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



let clutter = ""

function encryption(){
    document.querySelector(".encrypt-btn").addEventListener("click",function(){
        // alert("thank you");

        // get input

        let input = document.getElementById("txtmsg").value
        console.log(input);

        // get password

        let password = document.getElementById("password").value
        console.log(password);

        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `
        });
        console.log(clutter)

        // document.querySelector(".result").style.display = "block"
        document.querySelector(".result").innerHTML = clutter

        let data = [];

        if(JSON.parse(localStorage.getItem('data1'))){

            data=JSON.parse(localStorage.getItem('data1'))
            data.push({'pass':password,'input':input,'clutter':clutter});

        }else{
            data = [{'pass':password,'input':input,'clutter':clutter}];
        }

        // data = [{'pass':password,'input':input,'clutter':clutter}];
        // console.log(data)
        localStorage.setItem('data1',JSON.stringify(data))
        


    })
    
}

encryption()

// -------------------------------------------------------------------------------------------------------------------------buttonclickfunction

function btnclick(){
    document.querySelector(".dec-btn").addEventListener("click",function(){
        document.querySelector(".decryption").style.display = "block"
        document.querySelector(".encryption").style.display = "none"
        document.querySelector(".dec-btn").style.backgroudColor = "#111"
        document.querySelector(".enc-btn").style.backgroudColor = "#444"
        document.querySelector(".result").style.display = "none"
        document.querySelector(".main>h1 i").style.rotate = "180deg"

    })
    document.querySelector(".enc-btn").addEventListener("click",function(){
        document.querySelector(".encryption").style.display = "block"
        document.querySelector(".decryption").style.display = "none"
        document.querySelector(".enc-btn").style.backgroudColor = "#111"
        document.querySelector(".dec-btn").style.backgroudColor = "#444"
        document.querySelector(".main>h1 i").style.rotate = "360deg"
        document.querySelector(".result").style.display = "none"
    
    })

    document.querySelector(".encrypt-btn").addEventListener("click",function(){
        document.querySelector(".result").style.display = "block"
    })
    document.querySelector(".decrypt-btn").addEventListener("click",function(){
        document.querySelector(".result").style.display = "block"
    })
}

btnclick()

// ---------------------------------------------------------------------------------------decryption function

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function(){
    let clutter2 = '';
    
        // getting an given emoji msg
    
        let input2 = document.querySelector('#emojimsg').value
    
        // getting an given final password
    
        let pass2 = document.querySelector('#finalpassword').value
    
        let user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
    
        let str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))}`
        });
        console.log(clutter2)
        let found;
    
        for(let i of user){
            if (i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
    
        if(found.clutter === clutter2){
            document.querySelector(".result").style.display = "block"
            document.querySelector(".result").style.console ="#eee"
    
            document.querySelector(".result").innerHTML = found.input
        }else{
            document.querySelector(".result").style.display = "block"
            document.querySelector(".result").style.console ="red"
            document.querySelector(".result").innerHTML = "Wrong Password"
        }
    })
    }
    
    

decryption()

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector(",main"),
//     smooth: true
// });





    // localStorage.setItem('username','shiva') //values dena 
    // let a=localStorage.getItem('username') //values lena
    // let arr = ["shiva",3,true,'lab']
    // console.log(arr)
    
    // localStorage.setItem('array',JSON.stringify(arr)) //as string
    // console.log(localStorage.getItem('array')) 
    
    // console.log(JSON.parse(localStorage.getItem('array'))) //as array 
    
    // let a = document.getElementById("#txtmsg")
    // console.log(a)