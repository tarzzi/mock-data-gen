// Data
const fnames = [
    "Juhani",
    "Johannes",
    "Mikael",
    "Olavi",
    "Onni",
    "Matias",
    "Elias",
    "Oliver",
    "Ilmari",
    "Eemeli",
    "Maria",
    "Sofia",
    "Emilia",
    "Olivia",
    "Aino",
    "Amanda",
    "Matilda",
    "Helmi",
    "Aurora",
    "Jouni",
    "Katariina",
    "Leena",
    "Arto",
    "Emilia",
    "Liisa",
    "Pertti",
    "Markus",
    "Susanna",
    "Annikki",
    "Aleksi",
    "Martti",
    "Tomi",
    "Tuomas",
    "Reijo",
    "Vesa",
    "Olli",
    "Elina",
    "Sofia",
    "Tuulikki",
    "Maarit"
  ];
  const lnames = [
    "Korhonen",
    "Virtanen",
    "Mäkinen",
    "Nieminen",
    "Mäkelä",
    "Hämäläinen",
    "Laine",
    "Heikkinen",
    "Koskinen",
    "Järvinen",
    "Lehtonen",
    "Lehtinen",
    "Saarinen",
    "Salminen",
    "Heinonen",
    "Niemi",
    "Heikkilä",
    "Kinnunen",
    "Salonen",
    "Turunen",
    "Salo",
    "Laitinen",
    "Tuominen",
    "Rantanen",
    "Karjalainen",
    "Jokinen",
    "Mattila",
    "Savolainen",
    "Lahtinen",
    "Ahonen",
    "Ojala",
    "Leppänen"
  ];
  const streetNames = [
    "Rantatie",
    "Kirkkotie",
    "Koulutie",
    "Teollisuustie",
    "Rinnetie",
    "Myllytie",
    "Kuusitie",
    "Mäntytie",
    "Välitie",
    "Rantalantie",
    "Mäkitie",
    "Koivukuja",
    "Peltotie",
    "Niemeläntie",
    "Niementie",
    "Mäkeläntie",
    "Pajatie",
    "Vanhatie",
    "Koivutie",
    "Riihitie",
    "Koivulantie",
    "Pappilantie",
    "Heikkiläntie",
    "Aholantie",
    "Sepäntie",
    "Jokelantie",
    "Peltolantie",
    "Kuuselantie",
    "Opintie",
    "Harjutie",
    "Oikotie"
  ];
  const cities = [
    "Helsinki",
    "Espoo",
    "Tampere",
    "Vantaa",
    "Oulu",
    "Turku",
    "Jyväskylä",
    "Kuopio",
    "Lahti",
    "Pori",
    "Kouvola",
    "Joensuu",
    "Lappeenranta",
    "Vaasa",
    "Hämeenlinna",
    "Seinäjoki",
    "Rovaniemi",
    "Mikkeli",
    "Salo",
    "Kotka",
    "Porvoo",
    "Kokkola",
    "Hyvinkää",
    "Lohja",
    "Järvenpää"
  ];
  // Buttons and divs
  const btn = document.getElementById("btn");
  const clearBtn = document.getElementById("btn-clr");
  const tenBtn = document.getElementById("btn-ten");
  const onekBtn = document.getElementById("btn-onek");
  const copyBtn = document.getElementById("btn-copy");
  const nameCount = document.getElementById("namecount");
  const copyInput = document.getElementById("copy");

  // Checkboxes
  const ac = document.getElementById("a");
  const bc = document.getElementById("b");
  const cc = document.getElementById("c");
  const dc = document.getElementById("d");
  const ec = document.getElementById("e");
  const fc = document.getElementById("f");
  var count = 0;

  function genName() {
    let x = Math.floor(Math.random() * 40);
    let y = Math.floor(Math.random() * 31);
    let fname = fnames[x];
    let lname = lnames[y];
    let name = fname + " " + lname;
    return name;
  }
  function genDate() {
    let day = Math.floor(1 + Math.random() * 31);
    let month = Math.floor(1 + Math.random() * 12);
    let year = Math.floor(1 + Math.random() * 99);
    year = 1900 + year;
    let str = day + "." + month + "." + year;
    return str;
  }
  function genPhone() {
    let number = "0";
    let y = Math.floor(Math.random() * 2);
    let z;
    if (y === 0) {
      z = "4";
    } else {
      z = "5";
    }
    number += z + "0";  
    let i = 0;
    while (i <= 6) {
      let x = Math.floor(Math.random() * 10);
      number += x.toString();
      i++;
    }
    return number;
  }
  function genAddr() {
    let x = Math.floor(Math.random() * 31);
    let streetName = streetNames[x];
    let number = Math.floor(Math.random() * 100 + 1);
    let streetAddr = streetName + " " + number;
    return streetAddr;
  }
  function genPostal() {
    let x = 0;
    let postal = "";
    while (x <= 4) {
      x++;
      let y = Math.floor(Math.random() * 10);
      postal += y.toString();
    }
    return postal;
  }
  function genCity() {
    let x = Math.floor(Math.random() * 25);
    let city = cities[x];
    return city;
  }
  function generatePerson() {
    let data = "";
    if(ac.checked == true){
      let name = genName();
      data += name + ",";
    }  if(bc.checked == true){
      let bday = genDate();
      data += bday + ",";
    }  if(cc.checked == true){
      let addr = genAddr();
      data += addr + ",";
    }  if(dc.checked == true){
      let postal = genPostal();
      data += postal + ",";
    } if(ec.checked == true){
      let city = genCity();
      data += city + ",";
    } if(fc.checked == true){
      let phone = genPhone();
      data += phone + ",";
    }
    data += " \n ";
    let dataDiv = document.createElement("div");
    dataDiv.append(data);
    dataDiv.style = "border: solid 1px gray; padding:2px";
    let a = document.getElementById("data");
    a.append(dataDiv);
    count++;
    nameCount.innerHTML = count;
    copyInput.value += data;
  }
  btn.onclick = () => {
    generatePerson();
  };
  clearBtn.onclick = () => {
      let a = document.getElementById("data");
      a.innerHTML = "";
      count = 0;
      nameCount.innerHTML = count;
      copyInput.value = "";    
  };
  tenBtn.onclick = () => {
    let x = 0;
    while (x < 10) {
      generatePerson();
      x++;
    }
  };
  onekBtn.onclick = () => {
    let x = 0;
    while (x < 100) {
      generatePerson();
      x++;
    }
  };
  copyBtn.onclick = () => {
    copyInput.select();
    copyInput.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyInput.value);
    alert("Copied!")
  };