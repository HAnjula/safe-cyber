import React, { useState } from 'react';

const Quiz6 = ({ exitQuiz }) => {
  const [activeSection, setActiveSection] = useState('home');

  const startQuiz = () => setActiveSection('instructions');
  const backToHomePage = () => setActiveSection('home');
  const continueToQuiz = () => setActiveSection('quiz');
  const submitAnswer = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    if (selectedAnswer.value === 'B') { // Update this to match your correct answer value
      alert("Your answer is correct.\nThe message is fake. Be aware of suspicious calls demanding personal information.");
    } else {
      alert("Oops! You are wrong. The correct answer is (B).\nBe cautious of any calls asking for personal information or urgent actions.");
    }
    setActiveSection('final');
  };

  return (
    <main className="bg-[#070114] min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl px-4">
        {activeSection === 'home' && (
          <section className="home block">
            <div id="homePage" className="home-content text-center">
            <h1 className="animate-text text-shadow text-[#48104b] text-4xl font-bold mb-4">Social Engineering</h1>
              <p className="text-white mb-4">
                This Quiz helps you to learn further about Social Engineering Attack types.
                <br />
                <br />
                Let's go to the challenge....!
              </p>
              <button
                id="startButton"
                className="start-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold mt-8 hover:bg-[#48104b] transition duration-300"
                onClick={startQuiz}
              >
                Start Quiz
              </button>
            </div>
          </section>
        )}

        {activeSection === 'quiz' && (
          <section className="quiz-section block">
            <div className="quiz-box bg-transparent border-2 border-[#48104b] rounded-lg p-6 max-w-2xl mx-auto">
              <h1
                className="text-white text-3xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(45deg, transparent, #641655, transparent)',
                  borderRadius: '6px',
                  textAlign: 'center',
                }}
              >
                Social Engineering
              </h1>
              <div className="quiz-header flex justify-between items-center pb-4 border-b-2 border-[#48104b] mb-6">
                <h2 className="text-white text-2xl">Vishing</h2>
              </div>
              <div id="quizDialog" className="text-center">
                <span className="text-white text-2xl block mb-4">
                  Identify: Play the provided voice message to identify if the message is fake or not.
                </span>
                <audio id="scenarioAudio" controls className="mb-4">
                  <source src="src/assets/vishing.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <form id="quizForm" className="flex flex-col items-start space-y-4">
                  <div className="image-option text-white flex flex-col space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="answer" value="A" className="mr-2" />
                      (A) Not Fake
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="answer" value="B" className="mr-2" />
                      (B) Fake
                    </label>
                  </div>
                </form>
                <div className="quiz-footer flex justify-between items-center border-t-2 border-[#48104b] pt-6 mt-6">
                  <button
                    className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                    onClick={submitAnswer}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                    onClick={exitQuiz}
                  >
                    Exit Quiz
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'instructions' && (
          <div id="instructionsDialog" className="popup-info block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-[transparent] border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Quiz Guide</h2>
            <ul className="text-purple-200 mb-4">
              <li>- This short quiz will not only test your knowledge but also provide valuable insights.</li>
              <li>- Take your time and answer thoughtfully.</li>
              <li>- All the questions contribute to your final score.</li>
              <li>- Review your answers before submitting to ensure accuracy.</li>
            </ul>
            <div className="btn-group flex justify-between mt-8">
              <button
                className="info-btn-2 bg-[transparent] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={backToHomePage}
              >
                Exit Quiz
              </button>
              <button
                className="info-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={continueToQuiz}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {activeSection === 'final' && (
          <div id="finalDialog" className="popup-info-2 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-[transparent] border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Thank you for Your Contribution.</h2>
            <div className="flex justify-center">
              <button
                className="info-btn-2 bg-[transparent] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={exitQuiz}
              >
                Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Quiz6;
