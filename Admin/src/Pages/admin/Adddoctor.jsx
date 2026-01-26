import React from "react";
import assets from "../../assets/assets";
export default function Adddoctor() {
  return (
    <form className="m-5 w-full bg-[#f2f3ff]">
      <p className="mb-3 text-lg font-medium">Add Doctor </p>
      <div className="bg-white px-8 py-8 boarder rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_areaa} alt="" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            upload doctor <br /> picture
          </p>
        </div>

        <div>
          <p>Doctor name</p>
          <input type="text" placeholder="Name" required />
        </div>
        <div>
          <p>Doctor Email</p>
          <input type="Email" placeholder="your email" required />
        </div>
        <div>
          <p>Doctor password</p>
          <input type="password" placeholder="password" required />
        </div>
        <div>
          <p>Experience</p>
          <select name="" id="">
            <option value="1 year">1 year</option>
            <option value="2 year">2 year</option>
            <option value="3 year">3 year</option>
            <option value="4 year">4 year</option>
            <option value="5 year">5 year</option>
            <option value="6 year">6 year</option>
            <option value="7 year">7 year</option>
            <option value="8 year">8 year</option>
            <option value="9 year">9 year</option>
            <option value="10 year">10 year</option>
          </select>
        </div>
        <div>
          <p>Fees</p>
          <input type="number" placeholder="your fees" required />
        </div>
        <div>
          <p>Doctor Email</p>
          <input type="text" placeholder="your email" required />
        </div>
        <div>
            <p>speciality</p>
            <select name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="pediatrician">pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
        </div>
        <div>
            <p>Education</p>
            <input type="text" placeholder="Education" required/>
        </div>
        <div>
            <p>Address</p>
            <input type="text" placeholder="Address 1" required/>
            <input type="text" placeholder="Address 2" />
        </div>
        <div>
            <p>About me</p>
            <textarea type="text" placeholder="Write about yourself"/>
        </div>
      </div>
    </form>
  );
}
