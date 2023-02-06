export const projects = [
    {
        title: "Custom Handheld Gimbal",
        subtitle: "C/C++ and Python",
        description:
            "I started this project for a student photography club at my university. We wanted an easily customizable handheld gimbal therefore we decided to make one from scratch. I took the lead in the control system, state machine, and UX development.",
        image: "./gimbal_demo.gif",
        link: "https://github.com/josheenyen99/GimbalProject"
    },
    {
        title: "Assistive Gimbal App",
        subtitle: "Swift",
        description:
            "To add on to the Gimbal that I made for our photography club, I created an assistive App that would communicate to our Embedded systems via BLE. By adding features such as object detection we were allowed to explore things such as visual servoing to have a camera physically track an object of interest.",
        image: "./GimbalApp.png",
        link: "https://github.com/josheenyen99/AssistiveGimbalApp"
    },
    {
        title: "Semi-Supervised Learning Froth Soft Sensors",
        subtitle: "Keras, Numpy, Pandas, and Tensorflow",
        description:
            "This is a research project sponsored by the Material Engineering Department of the University of Alberta. The goal of this project was to determine the efficacy of ML techniques in the mining process of froth flotation. Here we explored various architectures such as CNNs, auto-encoders, and semi-supervised GANs. ",
        image: "./froth_image.jpg",
        link: "https://github.com/josheenyen99/FrothSoftSensor"
    },
    {
        title: "Python Guitar Tuner",
        subtitle: "Tkinter, Threading, Matplotlib and pyAudio",
        description:
            "A guitar tuner app that I built using tkinter, pyAudio, and Matplotlib. The app is designed to only have a single main frame containing a live plotter and labels to notify the user of detected changes in pitch; the main tuning thread is connected to the frontend with a queue and updated using another thread ran on the mainframe layer. Lastly, the GUI was built with the intention that the tuner implementation is simply a thread and should be treated as a type of interface.",
        image: "./pyGuitarTuner.png",
        link: "https://github.com/josheenyen99/pyGuitarTuner"
    }
];

export const skills = ["Electrical Hardware Design", "C", "C++", "Python", "Swift", "Typescript", "Tensorflow", "Pandas", "React", "Express"];