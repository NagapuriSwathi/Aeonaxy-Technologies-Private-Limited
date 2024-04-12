import LandingPage from "./components/HomePageLeft/LandingPage";
import Form from "./components/Form/Form";
import Profile from "./components/Profile/Profile";
import UserChoices from "./components/UserChoices/UserChoices";
import Navigation from "./components/Header/Navigation";
import VerifyEmail from "./components/Header/VerifyEmail";
import Footer from "./components/Header/Footer";

function App() {
  return (
    <>
      <main className="mx-40">
        <section
          id="home"
          className="flex flex-col justify-center align-center lg:flex-row"
        >
          <div className="w-full mx-auto flex justify-center align-center bg-[#F2D184] pt-16 mr-20">
            <LandingPage />
          </div>
          <div className="flex justify-center align-center py-16">
            <Form />
          </div>
        </section>

        <img
          src="src/assets/Images/logo.png"
          alt="logo"
          className="pl-36 my-20"
        />

        <section id="profile" className="flex justify-center align-center">
          <div>
            <Profile buttonState={true} />
          </div>
        </section>

        <img
          src="src/assets/Images/logo.png"
          alt="logo"
          className="pl-36 my-20"
        />

        <section id="profile" className="flex justify-center align-center">
          <div>
            <Profile
              imagePath="src/assets/Images/profileImage.png"
              imageAlternateText="Profile Image"
              location="Sans Franscisco"
              buttonState={false}
              paragraphContent="or Press RETURN"
            />
          </div>
        </section>

        <img
          src="src/assets/Images/logo.png"
          alt="logo"
          className="pl-36 my-20"
        />

        <section id="choice1" className="flex justify-center align-center">
          <div>
            <UserChoices isButtonDisabled={true} />
          </div>
        </section>

        <img
          src="src/assets/Images/logo.png"
          alt="logo"
          className="pl-36 my-20"
        />

        <section id="choice1" className="flex justify-center align-center">
          <div>
            <UserChoices isButtonDisabled={false} />
          </div>
        </section>

        <section id="verify" className="mt-28">
          <div className="header">
            <Navigation />
          </div>

          <div className="emailVerification">
            <VerifyEmail />
          </div>

          <div className="footer bg-gray-100 p-2 border-1 shadow-2 rounded-lg">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
