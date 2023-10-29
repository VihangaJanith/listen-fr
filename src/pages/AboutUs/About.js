import React from 'react';
import './About.css'; // Import your custom CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="jumbotron jumbotron-fluid about-us-header">
        <div className="container text-center">
          <h1 className="display-4">අප ගැන තොරතුරු</h1>
          <p className="lead">Our Story, Our Team, Our Mission</p>
        </div>
      </div>

      <div className="container about-us-content">
        <div className="row">
          <div className="col-md-6">
            <h2 className="name-heading" >Our Story</h2>
            <p>
            අපගේ ගමන ආරම්භ වූයේ සරල අදහසකිනි: අධ්‍යාපනය සහ සිසුන්ගේ වේගවත් ජීවිත අතර පරතරය පියවීමට තාක්‍ෂණයේ බලය උපයෝගී කර ගැනීම. අපට අවශ්‍ය වූයේ ඉගෙනීම පහසු, වඩාත් ප්‍රීතිමත්, සහ උනන්දුවෙන් සිටින සෑම මනසකටම පහසුවෙන් ලබා ගැනීමටය.
            </p>
            <p>
            ශ්‍රී ලංකාව වැනි ගැඹුරු සාහිත්‍ය උරුමයක් ඇති රටක සිංහල භාෂාවේ සුන්දරත්වය හා සම්ප්‍රදාය රැකගැනීම අපට අත්‍යවශ්‍ය විය. ඉගෙනීම තොරතුරු පමණක් නොව සිත් ඇදගන්නාසුළු බවට පත් කරමින් අපගේ සංස්කෘතියේ විස්මිත කතාවලට ජීවය ලබා දිය හැකි යෙදුමක් අපි අපේක්ෂා කළෙමු. මෙම අදහස සමඟ අපි මෙහෙයුමක් ආරම්භ කළෙමු
.
            </p>
          </div>
          <div className="col-md-6">
          <h2 className="name-heading">Our Mission</h2>
            <p>
            ListenEd හි අපගේ මෙහෙවර වන්නේ සාම්ප්‍රදායික ඉගෙනීම ආකර්ශනීය, ප්‍රවේශ විය හැකි සහ සංස්කෘතිකමය වශයෙන් පොහොසත් අත්දැකීමක් බවට පරිවර්තනය කරන, අධ්‍යාපනයට ආදරයක් ඇති කරවන සහ අනාගත පරපුර සඳහා අපගේ උරුමය සුරැකෙන හඬ-පාලිත ශ්‍රව්‍ය පොත් යෙදුමක් ලබා දීමෙන් ශ්‍රී ලංකාවේ විශ්ව විද්‍යාල සිසුන් සවිබල ගැන්වීමයි. දැනුම සැමට, ඕනෑම වේලාවක, ඕනෑම තැනකට පහසුවෙන් ලබා ගත හැකි බව සහතික කරමින්, ශාස්ත්‍රීය හා නවීන ජීවිතය අතර පරතරය පියවීමට අපි කැපවී සිටිමු.

            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <h2 className="name-heading">Our Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img
                  src="team-member-1.jpg" // Replace with team member photo
                  alt="Team Member 1"
                  className="img-fluid rounded-circle"
                />
                <h4>John Doe</h4>
                <p>Co-Founder</p>
              </div>
              <div className="team-member">
                <img
                  src="team-member-2.jpg" // Replace with team member photo
                  alt="Team Member 2"
                  className="img-fluid rounded-circle"
                />
                <h4>Jane Smith</h4>
                <p>Lead Developer</p>
              </div>
              {/* Add more team members as needed */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */} 
        <div className="row">
          <div className="col-md-12">
            <h2 className="name-heading">Our Values</h2>
            <p>
            අපගේ ප්‍රවේශ්‍යතාවයේ මූලික වටිනාකම සෑම සිසුවෙකුටම, ඔවුන්ගේ තත්වයන් නොසලකා, අපගේ හඬ-පාලිත ශ්‍රව්‍ය පොත් යෙදුම සමඟ ඉගෙනීමට සහ සාර්ථක වීමට අවස්ථාව ඇති බව සහතික කිරීමට අපව පොලඹවයි. මේ අතර, නවෝත්පාදනයන් සඳහා අපගේ කැපවීම අඛණ්ඩව ඉගෙනුම් අත්දැකීම් පොහොසත් කරයි, කැපවීම සහ ඉදිරි චින්තන අධ්‍යාපනය පෝෂණය කිරීම සඳහා අති නවීන තාක්‍ෂණය සහ නිර්මාණාත්මක ප්‍රවේශයන් භාවිතා කරයි.

            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="name-heading">Our Values</h2>
            <p>
            අපි ශ්‍රී ලංකා තොරතුරු තාක්ෂණ ආයතනයේ (SLIIT) සිසුන් පිරිසක් වන අතර, දැනට අපගේ මෘදුකාංග ඉංජිනේරු විද්‍යාව හදාරන සිව්වන වසරේ ඉගෙනුම ලබයි. තාක්‍ෂණය සඳහා අපගේ ගැඹුරු ආදරය සහ අධ්‍යාපනය වැඩිදියුණු කිරීම සඳහා හවුල් කැපවීම තුළ මුල් බැස ඇති අපි සැබවින්ම නව්‍ය දෙයක් නිර්මාණය කිරීමට එකතු වී සිටිමු. සිසුන් ලෙස අපගේ ගමන ශ්‍රී ලංකාවේ සිටින අපගේ සෙසු විශ්ව විද්‍යාල සිසුන්ගේ ජීවිත කෙරෙහි ධනාත්මක බලපෑමක් ඇති කිරීමට අපගේ ආශාවට හේතු වී ඇති අතර, වැඩිදියුණු කිරීම සඳහා නිර්මාණය කර ඇති හඬ-පාලිත ශ්‍රව්‍ය පොත් යෙදුමක් වන ListenEd සංවර්ධනය කිරීමේ මෙහෙවර අපි ආරම්භ කළේ එබැවිනි. ඉගෙනීම සහ අධ්‍යාපනය වඩාත් ප්‍රවේශ විය හැකි සහ ආකර්ෂණීය කරන්න. අපගේ අද්විතීය ශාස්ත්‍රීය දැනුම සහ තාක්ෂණික ප්‍රවීණතාවයේ සම්මිශ්‍රණය සමඟ, අපි සිසුන් අධ්‍යාපනික අන්තර්ගතයට ප්‍රවේශ වන සහ අන්තර් ක්‍රියා කරන ආකාරය විප්ලවීය කිරීමට කැපවී සිටිමු.


            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
