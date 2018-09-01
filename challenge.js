const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += stringToPrint;
};

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

console.log(elizabethSanger.volunteers[2].email);

const congDisBuilder = () => {
const congDis = elizabethSanger.congressionalDistrict;
printDom(`<h3>Congressional District: ${congDis}</h3>`, 'congressionalDistrict');
}

congDisBuilder();

const statementsBuilder = () => {
    let newStatement = '';
    for (i = 0; i < elizabethSanger.statements.length; i++) {
        newStatement += `<div class="statement">`;
        newStatement +=     `<p class="statement">Statement: ${elizabethSanger.statements[i].statement}</p>`;
        newStatement +=     `<p class="category">category: ${elizabethSanger.statements[i].category}</p>`;
        newStatement += `</div>`;
    }
    
    printDom(newStatement, 'statements');
}

statementsBuilder();

const donationUrlBuilder = () => {
printDom(`<a href="https://${elizabethSanger.donationFormUrl}">Donation Form</a>`,'donationFormUrl');
}

donationUrlBuilder();


const eventBuilder = () => {
    let newStatement = '';
    for (i = 0; i < elizabethSanger.events.length; i++) {
        newStatement += `<div class="events">`
        newStatement +=     `<p>Date: ${elizabethSanger.events[i].date}  ||  `;
        newStatement +=     `Event:  ${elizabethSanger.events[i].title}  ||  `;
        newStatement +=     `Description: ${elizabethSanger.events[i].description}</p>`;
        newStatement += `</div>`
        
    }
    printDom(newStatement, 'events');
}

eventBuilder();

const volunteerBuilder = () => {
    let newStatement = '';
    //name: address: email: phone: availability: activities: 
    for (i = 0; i < elizabethSanger.volunteers.length; i++) {
      newStatement += `<div class"volunteer">`;
      newStatement +=   `<ul><h3>Name: ${elizabethSanger.volunteers[i].name}</h3>`;
      newStatement +=   `<li>Address: ${elizabethSanger.volunteers[i].address}</li>`;
      newStatement +=   `<li>Email: ${elizabethSanger.volunteers[i].email}</li>`;
      newStatement +=   `<li>Phone Number:${elizabethSanger.volunteers[i].phone}</li>`;
      newStatement +=   `<li>Availability: ${elizabethSanger.volunteers[i].availability}</li>`;
      newStatement +=   `<li>Activities: ${elizabethSanger.volunteers[i].activities}</li></ul>`;
      newStatement += `</div>`;
    }
    printDom(newStatement, 'volunteers');
};

volunteerBuilder();

const bioBuilder = () => {
  const newString = `<p><strong>Bio:</strong> ${elizabethSanger.biography}</p>`;
  printDom(newString, 'biography');
};

bioBuilder();

const voterRegistrationStringBuilder = () => {
    let newString = '';
    newString += `<div id="anchor">`
    newString +=    `<a href="https://${elizabethSanger.voterRegistrationUrl}">${elizabethSanger.voterRegistrationUrl}</a>`;
    newString +=    `<button id="voterRegButt">Change Link</button>`;
    newString += `</div>`
    printDom(newString, 'voterRegistrationUrl');
}


const imgBuilder = () => {
  let newStatement = '';
  newStatement += `<div id="imagesRemover">`;
  for (i = 0; i < elizabethSanger.images.length; i++) {
    newStatement += `<div id="${elizabethSanger.images[i].description}">`
    newStatement +=   `<img src="${elizabethSanger.images[i].imageUrl}" alt="${elizabethSanger.images[i].description}"></img>`;
    newStatement +=   `<p class="imgDescription">${elizabethSanger.images[i].description}</p>`;
    newStatement +=   `<button id="${elizabethSanger.images[i].imageUrl}">Change image</button>`
    newStatement += `</div>`;
  }
  newStatement += `</div>`;
  printDom(newStatement, 'images');
}

imgBuilder();


const updateImages = (i, newImgUrl, newImgDesc, newImgType) => { //select index, image, description, and type
  const removeOldImg = document.getElementById('imagesRemover');
  removeOldImg.parentNode.removeChild(removeOldImg);
  elizabethSanger.images[i].imageUrl = newImgUrl;
  elizabethSanger.images[i].description = newImgDesc;
  elizabethSanger.images[i].type = newImgType;
  
  imgBuilder();
}

for (i = 0; i < elizabethSanger.images[i]; i++) {
  const id = elizabethSanger.images[i].imageUrl;
  document.getElementById(id).addEventListener('click', id)
    updateImages(i, 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg', 'black cat', 'single cat');
  
}



// Leave stuff below alone!!!!

const missStateBuilder = () => {
  let newString = ''
    newString += '<div id="mission">'
    newString +=    `<p class="missionState"><strong>Mission Statement:</strong> ${elizabethSanger.missionStatement}</p>`;
    newString +=    `<button id="missStateButt">Change Misssion Statement</button>`
    newString += `</div>`
  printDom(newString, 'missionStatement');
};

missStateBuilder();

const updateMissState = (newMissState) => {
  elizabethSanger.missionStatement = newMissState;
  const removeMissState = document.getElementById('mission');
  removeMissState.parentNode.removeChild(removeMissState);
  missStateBuilder();
}

const missStateChange = () => {
  updateMissState('cat');
}

document.getElementById('missStateButt').addEventListener('click', missStateChange);

voterRegistrationStringBuilder();

const updateVoterRegirtration = (newURL) => {
    elizabethSanger.voterRegistrationUrl = newURL;
    const removeLink = document.getElementById('anchor');
    removeLink.parentNode.removeChild(removeLink);
    voterRegistrationStringBuilder();
}

const editLink = document.getElementById('voterRegButt');
const linkChange = () => {
  updateVoterRegirtration('https://www.bing.com');
};

editLink.addEventListener('click', linkChange);


