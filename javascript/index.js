

// View More Button
document.getElementById('header_button').addEventListener('click', function() {
    const section = document.getElementById('friend_id');
    section.scrollIntoView({ behavior: 'smooth' });
});

// All pet show -------------------------------------------------------------------------

document.getElementById('header_button').addEventListener('click', async function() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const pets = data.pets;
    document.getElementById('div_frand_fast').innerHTML = '';
    // Carde_1
    const div1 = document.createElement('div');
    div1.style.cssText = `
        width: 312px; 
        height: 432px; 
        border: 2px solid rgba(63, 62, 62, 0.884); 
        border-radius: 12px; 
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    `;
    div1.innerHTML = `
        <img src="${pets[0].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[0].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[0].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[0].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> ${pets[0].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[0].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_all_1">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id="Adopt_timer">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;" 
            id = "button_details"
            >Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div1);
    // Modal creation///////////////////////////////////////////////////////
    const modal = document.createElement('dialog');
    modal.id = "my_modal_1";
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
            <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
                <img src="${pets[0].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
                <div class="modal_div_3">
                    <h3 style="font-size: 20px; font-weight: 700;">${pets[0].pet_name}</h3>
                    <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[0].breed}</p>
                    <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[0].date_of_birth}</p>
                    <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[0].price}</p>
                    <hr style="width: 372px;">
                </div>
                <div class="modal_div_4">
                    <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                    <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[0].pet_details}</p>
                </div>
            </div>
            <form method="dialog" class="justify-center items-center">
                <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Show Modal on button click
    document.getElementById('button_details').addEventListener('click', function() {
        modal.showModal(); // Show the modal
    });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // show in click button
    // --------- button ID
    document.getElementById('btn_lick_all_1').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[0].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });

    // Carde_2
    const div2 = document.createElement('div');
    div2.style.cssText = div1.style.cssText;
    div2.innerHTML = `
        <img src="${pets[1].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[1].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[1].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[1].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> ${pets[1].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[1].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_all_2">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;" 
            id = "button_details_2">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div2);
    // Modal creation///////////////////////////////////////////////////////

const modal2 = document.createElement('dialog');
modal2.id = "my_modal_2";
modal2.className = "modal";
modal2.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[1].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[1].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[1].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[1].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[1].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[1].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
 `;
 document.body.appendChild(modal2);

 document.getElementById('button_details_2').addEventListener('click', function() {
     modal2.showModal(); // Show the second modal
 });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 // show in click button
    // --------- button ID
    document.getElementById('btn_lick_all_2').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[1].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });

    // Carde_3
    const div3 = document.createElement('div');
    div3.style.cssText = div1.style.cssText;
    div3.innerHTML = `
        <img src="${pets[2].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[2].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[2].category}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[2].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> ${pets[2].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[2].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_all_3">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_3">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div3);
        // Modal creation///////////////////////////////////////////////////////

const modal3 = document.createElement('dialog');
modal3.id = "my_modal_3";
modal3.className = "modal";
modal3.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[2].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[2].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[2].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[2].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[2].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[2].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
 `;
 document.body.appendChild(modal3);

 document.getElementById('button_details_3').addEventListener('click', function() {
     modal3.showModal(); // Show the second modal
 });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 // show in click button
    // --------- button ID
    document.getElementById('btn_lick_all_3').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[2].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });

    // Carde_4
    const div4 = document.createElement('div');
    div4.style.cssText = div1.style.cssText;
    div4.innerHTML = `
        <img src="${pets[3].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[3].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[3].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[3].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> ${pets[3].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[3].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_all_4">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;" 
            id = "button_details_4">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div4);
            // Modal creation///////////////////////////////////////////////////////

const modal4 = document.createElement('dialog');
modal4.id = "my_modal_4";
modal4.className = "modal";
modal4.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[2].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[2].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[2].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[2].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[2].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[1].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
 `;
 document.body.appendChild(modal4);

 document.getElementById('button_details_4').addEventListener('click', function() {
     modal4.showModal(); // Show the second modal
 });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 // show in click button
    // --------- button ID
    document.getElementById('btn_lick_all_4').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[3].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });

    // CSS for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width:600px) {
            #div_frand_fast > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
        }
    `;
    document.head.appendChild(style);
});


// Dogs button -----------------------------------------------------------------------------


document.getElementById('Adopt_btn_1').addEventListener('click', async function() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const pets = data.pets;

    document.getElementById('div_frand_fast').innerHTML = '';

    // Carde_1
    const div1 = document.createElement('div');
    div1.style.cssText = `
        width: 312px; 
        height: 432px; 
        border: 2px solid rgba(63, 62, 62, 0.884); 
        border-radius: 12px; 
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    `;
    div1.innerHTML = `
        <img src="${pets[0].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[0].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[0].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[0].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[0].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[0].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; 
            width: 56px; height: 38px; font-size: 17px;"
            id="btn_lick_1"
            >
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_dog_1" >Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div1);
               // Modal creation///////////////////////////////////////////////////////

const modal5 = document.createElement('dialog');
modal5.id = "my_modal_5";
modal5.className = "modal";
modal5.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[0].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[0].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[0].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[0].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[0].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[0].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
 `;
 document.body.appendChild(modal5);

 document.getElementById('button_details_dog_1').addEventListener('click', function() {
     modal5.showModal(); // Show the second modal
 });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_1').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[0].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });


    // Carde_2
    const div2 = document.createElement('div');
    div2.style.cssText = div1.style.cssText;
    div2.innerHTML = `
        <img src="${pets[9].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[9].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[9].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[9].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[9].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[9].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"
            id="btn_lick_2"
            >
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_dog_2">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div2);
         // Modal creation///////////////////////////////////////////////////////
const modal6 = document.createElement('dialog');
modal6.id = "my_modal_6";
modal6.className = "modal";
modal6.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[9].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[9].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[9].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[9].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[9].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[9].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
 `;
 document.body.appendChild(modal6);

 document.getElementById('button_details_dog_2').addEventListener('click', function() {
     modal6.showModal(); // Show the second modal
 });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_2').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[9].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });

    // Carde_3
    const div3 = document.createElement('div');
    div3.style.cssText = div1.style.cssText;
    div3.innerHTML = `
        <img src="${pets[10].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[10].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[10].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[10].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[10].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[10].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"
            id="btn_lick_3"
            >
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_dog_3">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div3);
   // Modal creation///////////////////////////////////////////////////////
const modal7 = document.createElement('dialog');
modal7.id = "my_modal_7";
modal7.className = "modal";
modal7.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[10].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[10].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[10].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[10].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[10].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[10].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal7);

document.getElementById('button_details_dog_3').addEventListener('click', function() {
     modal7.showModal(); // Show the second modal
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_3').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[10].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_4
    const div4 = document.createElement('div');
    div4.style.cssText = div1.style.cssText;
    div4.innerHTML = `
        <img src="${pets[11].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[11].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[11].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[11].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[11].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[11].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"
            id="btn_lick_4"
            >
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_dog_4">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div4);
     // Modal creation///////////////////////////////////////////////////////
const modal8 = document.createElement('dialog');
modal8.id = "my_modal_8";
modal8.className = "modal";
modal8.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[11].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[11].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[11].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[11].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[11].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[11].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal8);

document.getElementById('button_details_dog_4').addEventListener('click', function() {
     modal8.showModal(); // Show the second modal
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_4').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[11].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // CSS for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width:600px) {
            #div_frand_fast > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
        }
    `;
    document.head.appendChild(style);
});

// Cats Button ---------------------------------------------------------------------------------------

document.getElementById('Adopt_btn_2').addEventListener('click', async function() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const pets = data.pets;

    document.getElementById('div_frand_fast').innerHTML = '';

    // Carde_1
    const div1 = document.createElement('div');
    div1.style.cssText = `
        width: 312px; 
        height: 432px; 
        border: 2px solid rgba(63, 62, 62, 0.884); 
        border-radius: 12px; 
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    `;
    div1.innerHTML = `
        <img src="${pets[1].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[1].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[1].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[1].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[1].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[1].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_cat_1">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_cat_1">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div1);
         // Modal creation///////////////////////////////////////////////////////
const modal9 = document.createElement('dialog');
modal9.id = "my_modal_9";
modal9.className = "modal";
modal9.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[1].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[1].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[1].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[1].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[1].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[1].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal9);

document.getElementById('button_details_cat_1').addEventListener('click', function() {
     modal9.showModal(); // Show the second modal
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_cat_1').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[1].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_2
    const div2 = document.createElement('div');
    div2.style.cssText = div1.style.cssText;
    div2.innerHTML = `
        <img src="${pets[5].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[5].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[5].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[5].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[5].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[5].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_cat_2">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_cat_2">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div2);
             // Modal creation///////////////////////////////////////////////////////
const modal10 = document.createElement('dialog');
modal10.id = "my_modal_10";
modal10.className = "modal";
modal10.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[5].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[5].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[5].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[5].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[5].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[5].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal10);

document.getElementById('button_details_cat_2').addEventListener('click', function() {
     modal10.showModal(); // Show the second modal
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_cat_2').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[5].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_3
    const div3 = document.createElement('div');
    div3.style.cssText = div1.style.cssText;
    div3.innerHTML = `
        <img src="${pets[6].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[6].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[6].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[6].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[6].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[6].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_cat_3">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_cat_3">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div3);
              // Modal creation///////////////////////////////////////////////////////
const modal11 = document.createElement('dialog');
modal11.id = "my_modal_11";
modal11.className = "modal";
modal11.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[6].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[6].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[6].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[6].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[6].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[6].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal11);

document.getElementById('button_details_cat_3').addEventListener('click', function() {
     modal11.showModal(); // Show the second modal
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_cat_3').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[6].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_4
    const div4 = document.createElement('div');
    div4.style.cssText = div1.style.cssText;
    div4.innerHTML = `
        <img src="${pets[16].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[16].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[16].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[16].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[16].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[16].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_cat_4">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_cat_4">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div4);
         // Modal creation///////////////////////////////////////////////////////
const modal12 = document.createElement('dialog');
modal12.id = "my_modal_12";
modal12.className = "modal";
modal12.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[16].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[16].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[16].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[16].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[16].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[16].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal12);

document.getElementById('button_details_cat_4').addEventListener('click', function() {
     modal12.showModal(); 
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_cat_4').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[16].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // CSS for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width:600px) {
            #div_frand_fast > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
        }
    `;
    document.head.appendChild(style);
});


// Rabbits BuTTon ----------------------------------------------------------------------------------


document.getElementById('Adopt_btn_3').addEventListener('click', async function() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const pets = data.pets;

    document.getElementById('div_frand_fast').innerHTML = '';

    // Carde_1
    const div1 = document.createElement('div');
    div1.style.cssText = `
        width: 312px; 
        height: 432px; 
        border: 2px solid rgba(63, 62, 62, 0.884); 
        border-radius: 12px; 
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    `;
    div1.innerHTML = `
        <img src="${pets[2].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[2].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[2].category}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[2].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[2].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[2].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_rabbit_1">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_rabbit_1">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div1);
            // Modal creation///////////////////////////////////////////////////////
const modal13 = document.createElement('dialog');
modal13.id = "my_modal_13";
modal13.className = "modal";
modal13.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[2].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[2].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[2].category}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[2].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[2].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[2].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal13);

document.getElementById('button_details_rabbit_1').addEventListener('click', function() {
     modal13.showModal(); 
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_rabbit_1').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[2].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_2
    const div2 = document.createElement('div');
    div2.style.cssText = div1.style.cssText;
    div2.innerHTML = `
        <img src="${pets[3].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[3].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[3].category}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[3].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[3].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[3].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_rabbit_2">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_rabbit_2">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div2);
      // Modal creation///////////////////////////////////////////////////////
const modal14 = document.createElement('dialog');
modal14.id = "my_modal_14";
modal14.className = "modal";
modal14.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[3].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[3].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[3].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[3].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[3].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[3].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal14);

document.getElementById('button_details_rabbit_2').addEventListener('click', function() {
     modal14.showModal(); 
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_rabbit_2').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        
        const img = document.createElement('img');
        // Array Index number
        img.src = pets[3].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';
        divLast.appendChild(img); 
    });
    // Carde_3
    const div3 = document.createElement('div');
    div3.style.cssText = div1.style.cssText;
    div3.innerHTML = `
        <img src="${pets[12].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[12].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[12].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[12].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[12].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[12].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_rabbit_3">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_rabbit_3">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div3);
          // Modal creation///////////////////////////////////////////////////////
const modal15 = document.createElement('dialog');
modal15.id = "my_modal_15";
modal15.className = "modal";
modal15.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[12].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[12].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[12].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[12].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[12].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[12].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal15);

document.getElementById('button_details_rabbit_3').addEventListener('click', function() {
     modal15.showModal(); 
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_rabbit_3').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[12].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // Carde_4
    const div4 = document.createElement('div');
    div4.style.cssText = div1.style.cssText;
    div4.innerHTML = `
        <img src="${pets[13].image}" alt="pet Photo" style="width: 272px; height: 160px;">
        <h3 style="font-size: 20px; font-weight: 700;">${pets[13].pet_name}</h3>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> Breed: ${pets[13].breed}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> Birth: ${pets[13].date_of_birth}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-transgender"></i> Gender: ${pets[13].gender}</p>
        <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> Price : $${pets[13].price}</p>
        <hr style="width: 272px;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 12px;">
            <button style="border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px; width: 56px; height: 38px; font-size: 17px;"id="btn_lick_rabbit_4">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;">Adopt</button>
            <button style="width: 92px; height: 40px; border: 1px solid rgba(14, 122, 129, 0.15); border-radius: 8px;"
            id = "button_details_rabbit_4">Details</button>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div4);
        // Modal creation///////////////////////////////////////////////////////
const modal16 = document.createElement('dialog');
modal16.id = "my_modal_16";
modal16.className = "modal";
modal16.innerHTML = `
    <div class="modal_div_1" style="background-color: rgb(58, 100, 86); display: flex; flex-direction: column; align-items: center; gap: 20px; border: 1.5px solid rgb(34, 32, 32); width: 450px; height: 500px;border-radius: 16px; ">
        <div class="modal_div_2" style="display: flex; flex-direction: column; align-items: flex-start;margin-left: 5px; ">
            <img src="${pets[13].image}" style="width: 220px; height: 120px;margin-top: 10px;border-radius: 16px; " alt="image">
            <div class="modal_div_3">
                <h3 style="font-size: 20px; font-weight: 700;">${pets[13].pet_name}</h3>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-bars"></i> ${pets[13].breed}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-regular fa-calendar"></i> ${pets[13].date_of_birth}</p>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> <i class="fa-solid fa-hand-holding-dollar"></i> $${pets[13].price}</p>
                <hr style="width: 372px;">
            </div>
            <div class="modal_div_4">
                <h4 style="font-size: 30px; font-weight: 700;">Details Information</h4>
                <p style="font-size: 16px; font-weight: 400; gap: 8px;"> ${pets[13].pet_details}</p>
            </div>
        </div>
        <form method="dialog" class="justify-center items-center">
            <button class="btn w-20 h-8 bg-slate-500 rounded-xl">Close</button>
        </form>
    </div>
`;
document.body.appendChild(modal16);

document.getElementById('button_details_rabbit_4').addEventListener('click', function() {
     modal16.showModal(); 
});
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// show in click button
    // --------- button ID
    document.getElementById('btn_lick_rabbit_4').addEventListener('click', function() {
        const divLast = document.getElementById('div_frand_last');
        

        const img = document.createElement('img');
        // Array Index number
        img.src = pets[13].image; 
        img.alt = 'Pet Photo';
        img.style.width = '272px';
        img.style.height = '160px';

        divLast.appendChild(img); 
    });
    // CSS for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width:600px) {
            #div_frand_fast > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
        }
    `;
    document.head.appendChild(style);
});



// Birds BUTTON -------------------------------------------------------------------------------



document.getElementById('Adopt_btn_4').addEventListener('click', async function() { 
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const pets = data.pets;

    // Clear old content
    document.getElementById('div_frand_fast').innerHTML = '';

    // Create Carde_1
    const div1 = document.createElement('div');
    div1.classList.add('div_pra_1');  // Add the class
    div1.innerHTML = `
        <div class="div_pra_1">
            <img src="./image/error.webp" alt="Error" class="error_img">
            <h3>No Information Available</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `;
    document.getElementById('div_frand_fast').appendChild(div1);
});



// Button all pat

const buttons = document.querySelectorAll('.pat_btn_mob');
let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (activeButton) {
            activeButton.style.backgroundColor = 'rgb(198, 207, 207)';
        }
        this.style.backgroundColor = 'red';
        activeButton = this;
    });
});
















