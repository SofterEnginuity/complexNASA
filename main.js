document.querySelector('button').addEventListener('click', getLocation)

function getLocation(){
// const userInput = document.querySelector('input').value 
// console.log(userInput)
const randomNum = Math.floor(Math.random() * 485)

fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
    .then(res => res.json())
    .then(data =>{
        console.log('object',data)

        data.forEach(facility => {
         let facilityName = facility.facility
         let longitude = facility.location.longitude
         let latitude = facility.location.latitude
         let facilityLocation = facility.state 

        //  let temperature = facility.??????
         console.log(latitude,longitude)
         // console.log('does this work')

        fetch(`http://api.weatherapi.com/v1/current.json?key=a15ee75a3d2c4ef5bf7174050241710&q=${latitude},${longitude}`)
        // fetch(`http://api.weatherapi.com/v1/current.json?key=a15ee75a3d2c4ef5bf7174050241710&q=London`)
        .then(res => res.json())
        .then(data2 =>{
            console.log(data2.location.name)

      // document.querySelector('#temp').innerHTML +=  data2.current.temp_f
      // document.querySelector('#fn').innerHTML += facility.facility
      // document.querySelector('#loc').innerHTML += data2.location.name
      document.querySelector('tbody').innerHTML += `<tr>
				<th scope="row">${facility.facility}</th>
				<td>${data2.location.name}</td>
				<td>${data2.current.temp_f}</td>
			  </tr>`

      // the code above is using a string literal to insert a new row in the table for each data element returned 
            
    }
       
        )

     .catch(err => {
          console.log(`error ${err}`)
      }); 
        })
     
    })
    .catch(err => {
      console.log(`error ${err}`)
  });
}


//location city name and facility name temperature
//(yourtemp -273.15)* 9/5 +32