## Inspiration
The COVID-19 pandemic has significantly impacted the healthcare industry, making it challenging for patients to visit doctors physically. However, our team noticed that this wasn't just a result of the pandemic, rather an underlying problem with the health care system. The imbalance of volume of patients per doctor as well as long wait times and spacial concerns exhibits the need for digitalization in the space and a solution to tackle efficiency.

## What it does
MedNow is an online platform that provides a virtual solution allowing patients to receive care from professionals, saving them the time and effort to see one in person. Through the platform, patients can quickly and easily connect with the next available doctor on a given day for a video consultation and are also accompanied with a chat bot that they can get general consultation while they wait. This also allows doctors who want to help others during non-traditional hours the chance to do so.

## How we built it
The platform is dual sided, one for doctors and one for patients. For doctors, we provide a secure log-in authentication and a private virtual meeting room to meet with patients in a queue. Our backend handles the logic between those that join and leave a server, as well as routing patients to doctors when it is their turn.

## Challenges we ran into
Our main challenge was dealing with the management socket.io. Connecting users and managing them to dynamically add them to the video call hands-free was technically challenge and required in-depth thinking.

## Accomplishments that we're proud of
Realtime connection. We are proud of developing a platform that can improve access to healthcare for patients and reduce the burden on healthcare systems. We also managed to create a user-friendly platform that is easy for patients and doctors to use. Additionally, we are proud of ensuring that the platform is secure, reliable, and compliant with privacy regulations.

## What we learned
Developing MedNow taught us the importance of conducting thorough research and understanding the needs of users. We also learned the importance of building a secure and compliant platform, especially when it comes to sensitive data such as medical records. Additionally, we gained experience in integrating various third-party APIs, ensuring that the platform was stable and reliable. Technically, we also learned how to use web sockets to manage a multitude of individuals on a server and communicate to each one properly, a skill with lots of potential and that we are excited to continue to use.

## What's next for MedNow
Our goal for MedNow is to expand its reach and make it available to more patients and doctors globally. We plan to integrate additional features such as AI-powered symptom checkers and chatbots to provide even more personalized care for patients. We also plan to work with healthcare providers and insurance companies to make MedNow accessible to more patients, notably the government.
