export function GeoFindMe(onSuccess) {
    /*
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  }*/

  function error() {}

  const options = {
    enableHighAccuracy: true,
  };

  if (!navigator.geolocation) {
    alert("您的裝置不支援GPS定位");
  } else {
    let textContent = "Locating…";
    //navigator.geolocation.getCurrentPosition(success, error, options);
    navigator.geolocation.getCurrentPosition(onSuccess, error, options);
  }
}
