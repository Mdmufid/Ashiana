"use server";

export const sendBookingEmail = async (info : FormData) => {

    const API = process.env.GMAIL_SCRIPT;

    const name = info.get("name");
    const number = info.get("number");
    const email = info.get("email");
    const location = info.get("location");
    const service = info.get("service");
    const budget = info.get("budget");

    const sendToEmail = "locbilla@gmail.com";
    // const sendToEmail = "ommdeb2011@gmail.com";
    const emailSubject = `Somone Want To Contact With You`;
    const emailBody = `<h5>Query From ashianainteriors.com</h5><h4>Name : ${name}</h4><h4>Number : ${number}</h4><h4>Email : ${email}</h4><h4>Location : ${location}</h4><h4>Service : ${service}</h4><h4>Budget :${budget}</h4>`;

    const GET_URL = `${API}?toEmail=${sendToEmail}&subject=${emailSubject}&body=${emailBody}`

    await fetch(GET_URL);

    return {message : "Email Has Sended"}
}