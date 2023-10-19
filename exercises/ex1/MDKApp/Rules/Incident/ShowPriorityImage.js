/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ShowPriorityImage(clientAPI) {
    let incidentUrgency = clientAPI.binding.Urgency;
    if (incidentUrgency == "Low") {
        return '/MDKApp/Images/low-priority.png';
    }
  else  if (incidentUrgency == "Medium") {
        return '/MDKApp/Images/medium-priority.png';
    }
   else if (incidentUrgency == "High") {
        return '/MDKApp/Images/high-priority.png';
    }

}
