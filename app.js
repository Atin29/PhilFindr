var UI = require('ui');
 
var csv = "Safe Children Program Volunteer;1309 W. Hill St. Urbana, IL 61808;40.119122;-88.226903;Safe Children program volunteers work directly with childcare staff and children, providing emotional and physical support, while also creating a safe environment for children to express their feelings and emotions safely.;http://www.crisisnursery.net/Volunteers/Opportunities.aspx;Everyday;7:00 AM - 10:00 PM;(217) 337-2731;Maintenance Department: Cleaning Volunteer;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;Volunteer assist the maintenance staffs with cleaning and maintenance of the main library. Tasks include vacuuming carpets, wiping desk surfaces and bookshelves, and other general cleaning tasks.;http://www.champaign.org/support_us/volunteer_at_the_library;Weekdays;7:00 AM - 11:00 AM;(217) 403-2070;Community Elements Crisis Line Volunteers;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;Answer calls on the 24-hour Crisis Line, to respond to calls from people in Champaign County who are in need of support, resource information, and active listening.;http://communityelements.org/volunteers/;Monday, Wednesday;6:00 PM - 8:30 PM;(217) 403-2070;Carle Hospice Recruiting Volunteers;206 W. Anthony Dr. Champaign, IL 61822;40.136716;-88.246403;Hospice volunteers provide a wide variety of important and rewarding services to our patients and their families;https://cuvolunteer.org/opportunities/1630;Everyday;9:00 AM - 5:00 PM;(217) 383-3151;Adult Services: Computer Volunteers;206 W. Anthony Dr. Champaign, IL 61822;40.136716;-88.246403;Adult Services Computer Volunteers: Computer volunteers will standby the Information Desk to assist patrons with basic internet searching, e-mail, word processing, and overall computer navigation.;http://www.champaign.org/support_us/volunteer_at_the_library;Everyday;9:00 AM - 5:00 PM;(217) 403-2070;Circulation Services: Shelving Volunteer;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;Volunteers assist the library during weekday open hours with the following: Help shelve library materials, check library shelves, as well as pull requested materials from the library?s bookshelves. Both individual and group adult volunteers are welcome.;http://www.champaign.org/support_us/volunteer_at_the_library;Weekdays;9:00 AM - 5:00 PM;(217) 403-2070;Home Delivery Services: Home Delivery Substitute;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;Substitute drivers are requested as fill-in drivers for regularly scheduled volunteers. Volunteers deliver library materials to home-bound library patrons. Volunteers must have reliable transportation and a valid drivers license. Drivers must consent to a background check. Drivers must be 18 years or older.;http://www.champaign.org/support_us/volunteer_at_the_library;Tuesday, Wednesday, Thursday;9:00 AM - 5:00 PM;(217) 403-2070;Children's Services: Program Volunteer: Story Time;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;The story time volunteer will help the librarian get ready for story time, distribute name tags to children, and count the number of people attending the program. An interview with a volunteer coordinator must be completed before volunteer work can begin. ;http://www.champaign.org/support_us/volunteer_at_the_library;Monday;9:30 AM - 11:30 AM;(217) 403-2070;FriendShop Bookstore: Cashier;200 W. Green St. Champaign, IL 61820;40.110343;-88.2458594;Cashiers process all transactions for the librarys Friendshop. Retail supervisory experience a plus but not necessary. An interview with a volunteer coordinator is required before volunteer work can begin.;http://www.champaign.org/support_us/volunteer_at_the_library;Wednesday, Friday, Saturday, Sunday;1:00 PM - 5:30 PM;(217) 403-2070;FriendShop Bookstore: Shelving and sorting materials;200 W. Green St. Champaign,IL 61820;40.110343;-88.2458594;Volunteers are needed to assist the FriendShop Bookstore with sorting, pricing, and shelving of material for sale in the Friendshop.  An interview with a volunteer coordinator is required before volunteer work can begin.;http://www.champaign.org/support_us/volunteer_at_the_library;Monday;2:00 PM - 4:00 PM;(217) 403-2070;Afternoon Feeding, Watering and Bringing in of the Horses;2946 County Rd. 800 E  Dewey, IL 61840;40.302708;-88.306297;When you are at the rescue, you will get a work out physically and therapy emotionally because you will feel good that you are helping 4 barns of rescue horses at the shelter. No horse experience required.;https://cuvolunteer.org/opportunities/calendar;Everyday;3:30 PM - 6:30 PM;(217) 417-3680;Canteen Run ;2212 N. Market St. Champaign, IL 61822;40.302708;-88.306297;Join us as we take the Salvation Army Canteen truck throughout the Champaign/Urbana area to distribute food & supplies to homeless, needy, and hungry people.;http://tinyurl.com/canteenrun;Everyday;6:30 PM - 9:30 PM;(217) 417-3680;Douglass Branch- Program Volunteers;504 E. Grove St. Champaign, IL 61820;40.097548;-88.27427;Youth friendly volutneers are needed to assist with juvenile programs at the Douglass Branch Library. Programming schedules will be discusssed at volunteer internew. ;http://www.champaign.org/support_us/volunteer_at_the_library;Wednesday;4:00 PM - 5:00 PM;(217) 403-2070;International Prep Academy Volunteer Tutors Needed;1605 W. Kirby Ave. Champaign, IL 61820 ;40.097548;-88.27427;The SOAR after-school program is looking for enthusiastic and dedicated Spanish-speaking tutors to provide reading and homework support to Latina/o emergent bilingual/biliterate students in grades 2-5. ;http://education.illinois.edu/smallurban/soar/soar-volunteer-information;Thursday;2:00 PM - 3:15 PM;(217) 403-2070;";
var objectArray;
var counter = 0;
 
//csvFile goes above
function csvParse(test){
 
    var values = csv.split(";");
    var i = 0;
    var organization = [];
    var address = [];
    var lon = [];
    var lati = [];
    var descriptions = [];
    var url = [];
    var days = [];
    var times = [];
    var contact = [];
    var distance = [];
 
    for(i = 0; i < values.length; i+=9){
            organization[i/9] = values[i];
            address[i/9]= values[i+1];
            lon[i/9]= values[i+2];
            lati[i/9]= values[i+3];
            descriptions[i/9]= values[i+4];
            url[i/9]= values[i+5];
            days[i/9]= values[i+6];
            times[i/9]= values[i+7];
            contact[i/9]= values[i+8];
            distance[i/9]= 0;
     
            counter ++;
    }
  objectArray = {organization: organization, address: address, lon: lon, lati: lati, descriptions: descriptions, url: url, days: days, times: times, contact: contact, distance: distance};
return 1;
}
 
/*-----------------------------------------------------------------------------------------------------*/
 
 
var lat = null;
var lng;
 
function locationSuccess(pos) {
  console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
  lat = pos.coords.latitude;
  lng = pos.coords.longitude;
  console.log(lat +', '+ lng);
 
}
function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}
var locationOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
};
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
 
/* -------------------------------------------------------------------------------------------- */
 
 
//Calculates Distance between pebble and surrounding volunteer spots
function distanceCalc(longitudea, latitudea, lnga, lata){
 
      var lon1 = lnga;
      var lat1 = lata;
 
      var lon2 = longitudea;
      var lat2 = latitudea;
      //service place
 
      var R = 3959; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
       lat1 = toRad(lat1);
       lat2 = toRad(lat2);
 
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
  //console.log(d);
      return d;
 
}
 
// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}
 
 
 
function sortDistance(){
  var gar = csvParse(csv);
  console.log('made it');
  var i,a,b;
    for(i = 0; i < counter-1; i++){
        a = objectArray.lon[i];
        b = objectArray.lati[i];
        objectArray.distance[i] = distanceCalc(a, b, lat, lng);
    }
 
    //bubbleSort Below
    var end = counter;
    var k;
    var j;
    var temp, temp1, temp2, temp3, temp4, temp5, temp6, temp8;
 
    for(k = 0; k < counter; k++){
        for(j = 0; j < end; j++){
            if(objectArray.distance[j] > objectArray.distance[j+1]){
                temp = objectArray.distance[j];
                temp1 = objectArray.organization[j];
                temp2 = objectArray.descriptions[j];
                temp3 = objectArray.days[j];
                temp4 = objectArray.times[j];
                temp5 = objectArray.contact[j];
                temp6 = objectArray.url[j];
                temp8 = objectArray.address[j];
                objectArray.distance[j]= objectArray.distance[j+1];
                objectArray.organization[j]= objectArray.organization[j+1];
                objectArray.descriptions[j]= objectArray.descriptions[j+1];
                objectArray.days[j]= objectArray.days[j+1];
                objectArray.times[j]= objectArray.times[j+1];
                objectArray.contact[j]= objectArray.contact[j+1];
                objectArray.url[j]= objectArray.url[j+1];
                objectArray.address[j] = objectArray.address[j+1];
                objectArray.distance[j] = temp;
                objectArray.organization[j] = temp1;
                objectArray.descriptions[j] = temp2;
                objectArray.days[j] = temp3;
                objectArray.times[j] = temp4;
                objectArray.contact[j] = temp5;
                objectArray.url[j] = temp6;
                objectArray.address[j] = temp8;
            }
        }
        end--;
 
    }
  return objectArray;
}
 
/* -------------------------------------------------------------------------------------------- */
 
 
 
var loadCard = new UI.Card({
  icon: 'images/loading-2.png'
});
 
loadCard.show();
 
var main = new UI.Card({
  title: '   PhilFinder',
  icon: 'images/Block-I-OrangeBlue.png',
  body: '"Help is on the way."\n\n\nPress Select to \nContinue.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});
setTimeout(function(){
    main.show();
}, 4000);
 
 
 
 
main.on('click', 'select', function(e) {
  var Final = sortDistance();
var menu1;
var menu2;
var menu3;
var menu4;
 
var first = new UI.Card({
  title: Final.organization[0],
  body: 'Distance: ' + (Final.distance[0]).toFixed(2) + ' miles'
});
 
var second = new UI.Card({
  title: Final.organization[1],
  body: 'Distance: ' + (Final.distance[1]).toFixed(2) + ' miles'
});
 
var third = new UI.Card({
  title: Final.organization[2],
  body: 'Distance: ' + (Final.distance[2]).toFixed(2) + ' miles'
});
 
var fourth = new UI.Card({
  title: Final.organization[3],
  body: 'Distance: ' + (Final.distance[3]).toFixed(2) + ' miles'
});
 
 
 
 
  first.show();
  first.on('click', 'select', function(e) {
  menu1 = new UI.Menu({
    sections: [{
      items: [{
        title: Final.days[0]
      }, {
        title: Final.times[0]
      }, {
        title: Final.contact[0]
      }, {
        title: Final.url[0]
      }, {
        title: Final.address[0]
      }, {
        title: Final.descriptions[0]
      }]
    }]
  });
    menu1.show();
  });
 
  first.on('click', 'down', function(e) {
  second.show();
  second.on('click', 'select', function(e) {
  menu2 = new UI.Menu({
    sections: [{
      items: [{
         title: Final.days[1]
      }, {
        title: Final.times[1]
      }, {
        title: Final.contact[1]
      }, {
        title: Final.url[1]
      }, {
        title: Final.address[1]
      }, {
        title: Final.descriptions[1]
      }]
    }]
  });
    menu2.show();
  });
    second.on('click', 'down', function(e) {
  third.show();
  third.on('click', 'select', function(e) {
  menu3 = new UI.Menu({
    sections: [{
      items: [{
         title: Final.days[2]
      }, {
        title: Final.times[2]
      }, {
        title: Final.contact[2]
      }, {
        title: Final.url[2]
      }, {
        title: Final.address[2]
      }, {
        title: Final.descriptions[2]
      }]
    }]
  });
    menu3.show();
  });
        third.on('click', 'down', function(e) {
  fourth.show();
  fourth.on('click', 'select', function(e) {
  menu4 = new UI.Menu({
    sections: [{
      items: [{
         title: Final.days[3]
      }, {
        title: Final.times[3]
      }, {
        title: Final.contact[3]
      }, {
        title: Final.url[3]
      }, {
        title: Final.address[3]
      }, {
        title: Final.descriptions[3]
      }]
    }]
  });
    menu4.show();
  });
  });
  });
  });
 
});