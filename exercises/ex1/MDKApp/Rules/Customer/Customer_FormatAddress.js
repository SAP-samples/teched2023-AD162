/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Customer_FormatAddress(clientAPI) {
	let cust = clientAPI.binding.customer;
	return cust.AddressHouseNumber + ' ' + cust.AddressStreet + '\n' + cust.AddressCity + '\n' + cust.AddressCountry;
}