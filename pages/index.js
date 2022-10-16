import StatesComp from "../comps/states";

export default function Home() {
  return (
    <div className="wrapper">
      {/* <img src="/images/bg.jpg" alt="banner" /> */}
      <div className="section formsPage">
        <form action="#" className="form">
          <div className="input_box">
            <label htmlFor="form-email" className="label">
              Email
            </label>
            <input
              type="text"
              // rows="2"
              id="form-email"
              placeholder="example@gmail.com"
              name="name"
              // value={ques.category}
              // onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="form-password" className="label">
              Password
            </label>
            <input
              type="text"
              // rows="2"
              id="form-password"
              placeholder="Password"
              name="name"
              // value={ques.category}
              // onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
