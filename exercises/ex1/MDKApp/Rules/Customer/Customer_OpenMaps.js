/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Customer_OpenMaps(clientAPI) {
  let cust = clientAPI.binding.customer;
  let custAddresss = `${cust.AddressHouseNumber},${cust.AddressStreet},${cust.AddressCity},${cust.AddressCountry}`;
  let encaddr = encodeURIComponent(custAddresss);
  console.log("encoded address " + encaddr);
  // Get the Nativescript Utils Module
  const utilsModule = clientAPI.nativescript.utilsModule;
  // Get the Nativescript Platform Module
  const platformModule = clientAPI.nativescript.platformModule;
  if (platformModule.isIOS) {
    return utilsModule.openUrl(`maps://?address=${encaddr}`);
  } else if (platformModule.isAndroid) {
    return utilsModule.openUrl(`https://maps.google.com/?q=${encaddr}`);
  }
}