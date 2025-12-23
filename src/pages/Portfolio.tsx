import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal, Project } from '../components/ProjectModal';
import { SkillsVisualization } from '../components/SkillsVisualization';
import { CertificationGallery } from '../components/CertificationGallery';
import { CompetitionCard } from '../components/CompetitionCard';

/**
 * Projects below were taken from the user's CV. Source: CV file. :contentReference[oaicite:1]{index=1}
 */
const projects: Project[] = [
    {
      id: 'u-rov-1',
      title: 'Underwater ROV — Temperature & Salinity Monitoring',
      description:
        'Tethered underwater robot with Raspberry Pi for realtime navigation, live video, and environmental logging.',
      longDescription:
        'Developed a tethered underwater ROV using Raspberry Pi 4 for real-time navigation and live video streaming. Implemented motor control (BLDC + ESCs) for 3D movement with torque-balanced propulsion, built a PyQt GUI for live video and remote control, integrated waterproof temperature sensors with automated CSV logging, and achieved stable pool-test operation with full waterproofing.',
      image:
        'Images/rover.jpg',
      tags: ['Raspberry Pi', 'PyQt', 'Embedded', 'Sensors'],
      links: {
        demo: 'https://www.linkedin.com/posts/rishmika-wijewardhana_underwaterrobotics-raspberrypi-pyqt-activity-7338357197342502912-mdvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbFzfkBK8nfXS2PwYoDxD5qCsNePXSCAFU',
        github: 'https://github.com/RishWijewardhena/Remotely-Operated--Underwater-Robot.git'
      }
    },
  {
    id: 'pereabot-1',
    title: 'PereaBot — Wall Following Robot (Competition)',
    description:
      'ESP32 autonomous wall-following robot with multi-sensor array and simulation in Webots.',
    longDescription:
      'Designed and implemented an ESP32-based autonomous wall-following robot using multiple ToF sensors (VL53L0X) through an I2C multiplexer, TCS34725 color sensor for color-based navigation, and an MPU6050 IMU for orientation/stability. Performed parallel processing on ESP32, simulated in Webots, and completed the PereaBot competition final rounds.',
    image:
      'Images/perabots.jpg',
    tags: ['ESP32', 'VL53L0X', 'Webots', 'Robotics'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/Wall-Following-Robot.git'
    }
  },
  {
    id: 'esp32-temp-1',
    title: 'ESP32 High-Temperature MQTT Monitoring Device',
    description:
      'ESP32-based temperature monitor (up to 300°C) with MQTT, AP provisioning UI, and custom PCB.',
    longDescription:
      'Built an ESP32 monitoring device capable of measuring up to 300°C and publishing real-time data to an MQTT broker. Implemented Wi-Fi provisioning via AP mode and a built-in web interface, NeoPixel status indicators, backup battery support, custom PCB design, and a rugged enclosure for field deployment.',
    image:
      'Images/temp_monitoring.jpg',
    tags: ['ESP32', 'MQTT', 'Embedded', 'PCB'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/temperature_monitoring_device.git'
    }
  },
  {
    id: 'micromouse-1',
    title: 'Micromouse Robot — Maze Navigation',
    description:
      'Autonomous micromouse that navigates mazes using parallel processing on ESP32.',
    longDescription:
      'Designed and built a micromouse robot that autonomously navigates mazes. Implemented parallel routines on the ESP32 for sensor fusion and motor control, integrated ToF sensors, IMU, encoders, and created a compact 2-layer PCB for the final robot.',
    image:
      'Images/micromouse.jpg',
    tags: ['ESP32', 'Sensors', 'Embedded', 'PCB'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/micromouse_v1.git'
    }
  },
  {
    id: 'wearable-1',
    title: 'Wearable Smartwatch — Biometric Monitoring',
    description:
      'A low-power smartwatch using ATmega32 for heart-rate and temperature monitoring.',
    longDescription:
      'Built a wearable smartwatch on an ATmega32 microcontroller using embedded C (bare-metal) to measure heart rate and skin temperature. Focused on low-power operation and reliable real-time data acquisition for biometric monitoring.',
    image:
      'Images/smartwatch.jpg',
    tags: ['AVR', 'Embedded C', 'Wearable', 'Sensors'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/Medi_care-Firmware.git'
    }
  },
  {
    id: 'voice-alert-1',
    title: 'Voice-Activated Emergency Alert System',
    description:
      'Edge-AI voice recognition + GSM for offline emergency SMS alerts (Arduino Nano 33 BLE + SIM900).',
    longDescription:
      'Designed a voice-controlled IoT safety device using Arduino Nano 33 BLE and GSM SIM900 for offline emergency alerts. Integrated an Edge Impulse-trained ML model to recognize the phrase "Help Me" in real time and automatically send SMS notifications to predefined contacts without internet connectivity.',
    image:
      'Images/Emergency_alert.png',
    tags: ['Arduino', 'Edge AI', 'GSM', 'Embedded'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/emergency_recognition_system.git'
    }
  },
  {
    id: 'predictive-1',
    title: 'Predicting Liver Cirrhosis Outcomes (DNN)',
    description:
      'Deep Neural Network (Keras/TensorFlow) for prognosis prediction — 92% accuracy.',
    longDescription:
      'Preprocessed clinical dataset, handled missing data and categorical encoding, and built a Keras/TensorFlow DNN to predict liver cirrhosis outcomes. Used early stopping and dropout to reach ~92% accuracy and a weighted F1-score of 0.92.',
    image:
      'Images/Ann.png',
    tags: ['TensorFlow', 'Keras', 'ML', 'Python'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/Predictive-Modeling-of-Liver-Cirrhosis.git'
    }
  },
  {
    id: 'attendance-1',
    title: 'University Attendance System',
    description:
      'Barcode-based attendance system with CodeIgniter backend and React mobile app.',
    longDescription:
      'Built a university attendance system where students mark attendance by scanning barcode IDs via a mobile app (React) and data is stored in a secure MySQL backend (CodeIgniter). Includes admin dashboard, real-time stats, and class management tools for lecturers.',
    image:
      'Images/webApp.png',
    tags: ['React', 'CodeIgniter', 'MySQL', 'Mobile'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/university-attendance-system.git'
    }
  },
  // {
  //   id: 'medicare-1',
  //   title: 'MediCare — Medical App & Firmware',
  //   description:
  //     'Android app + firmware integration to manage appointments and share wearable device data.',
  //   longDescription:
  //     'Developed an Android application to manage medical appointments, patient history, and secure patient-doctor communication. Integrated with wearable device firmware to upload sensor data and allowed document uploads and secure access controls.',
  //   image:
  //     'https://images.unsplash.com/photo-1587502536263-3b3d0b0d2e1f?q=80&w=2070&auto=format&fit=crop',
  //   tags: ['Android', 'Firmware', 'Firebase', 'Healthcare'],
  //   links: {
  //     demo: '#',
  //     github: 'https://github.com/RishWijewardhena/Medi_Care.git'
  //   }
  // },
  {
    id: 'pet-rescue-1',
    title: 'Pet Rescue Web Application',
    description:
      'Full web platform with Admin/User/Guest dashboards for pet adoptions and status management.',
    longDescription:
      'Created a Pet Rescue web app featuring multiple roles (Admin/User/Guest), secure login, pet status updates, and request workflows for adoption management. Focused on usability and secure data flows.',
    image:
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=2070&auto=format&fit=crop',
    tags: ['Web', 'PHP', 'CodeIgniter', 'UX'],
    links: {
      demo: '#',
      github: 'https://github.com/RishWijewardhena/pet_rescue.git'
    }
  }
];

/* --- New: Experiences --- */
type Experience = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  start: string;
  end?: string;
  bullets: string[];
  photo?: string;
};

const experiences: Experience[] = [
  {
    id: 'exp-mentor-1',
    title: 'Student Mentor (Level 2)',
    organization: 'RoboticGen',
    location: 'Colombo',
    start: '2025',
    end: 'Present',
    bullets: [
      'Mentored students in robotics, embedded systems, and electronics projects, emphasizing practical learning and hands-on experience.',
      'Conducted learning sessions on I2C communication and other embedded protocols to enhance students’ hardware interfacing skills.',
      'Organized and guided students in online and physical competitions focused on embedded systems and AI projects.',
      'Supported workshops and practical sessions for peer learning, project development, and prototype testing.'
    ],
    photo: 'Images/roboticgen_mentor.jpg' // replace with your real path
  },
  {
    id: 'exp-intern-1',
    title: 'Electronic Engineer Intern',
    organization: 'Idea8',
    location: 'Colombo',
    start: '2024',
    end: '2025',
    bullets: [
      'Worked on PCB prototyping, sensor interfacing, and embedded firmware development',
      'Assisted senior engineers in testing and debugging low-level hardware and firmware',
      'Participated in project meetings, documentation, and prototype validation',
      'computer vision algorithms for quality inspection systems'
    ],
    photo: 'Images/idea8_intern.jpg' // replace with your real path
  }
];

/* --- New: Workshops / Talks --- */
type Workshop = {
  id: string;
  title: string;
  event: string;
  date: string;
  summary: string;
  details?: string;
  photo?: string;
  link?: string;
};

const workshops: Workshop[] = [
  {
    id: 'ws-moraf-1',
    title: 'Robotics Workshop — MoraForesight 3.0',
    event: 'MoraForesight 3.0 (IEEE Student Branch, University of Moratuwa)',
    date: '2025',
    summary:
      'Residential 3-day bootcamp with 80 selected students. Delivered a practical session on Ultrasonic sensors using MicroPython and the OboCar SDK, and led mini challenges to reinforce understanding.',
    details:
      'Represented RoboticGen as a Knowledge Partner. Day 2 included raw MicroPython implementation followed by demonstrations with OboCar SDK. Hands-on mini challenges and prototype testing were conducted.',
    photo: 'Images/moraforsight_workshop.jpg', // replace with your real path
    link: 'https://www.linkedin.com/posts/rishmika-wijewardhana_robotics-stemeducation-mentorship-activity-7369390794983538700-eXzT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbFzfkBK8nfXS2PwYoDxD5qCsNePXSCAFU'
  },
  {
    id: 'ws-i2c-1',
    title: 'Learning Lecture: I²C Communication — From Theory to Robot Applications',
    event: 'RoboticGen Mentors Meeting',
    date: '2025',
    summary:
      'Explained fundamentals of I²C protocol, master-slave architecture, and practical robotics applications. Walked through real sensor interfacing examples and shared demo code.',
    details:
      'Session recording: https://lnkd.in/eMEgatZp (full session). Focused on practical usage of I²C in sensor arrays and multi-device setups.',
    photo: 'Images/i2c_lecture.jpg', // replace with your real path
    link: 'https://www.youtube.com/watch?v=KfkTORvZqlI'
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-purple-200 selection:text-purple-900">
      <Navigation />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Completed <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of my most significant engineering projects, spanning embedded systems,
            robotics, IoT, and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Experience & <span className="text-rose-400">Roles</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Mentor and industry experience focused on embedded systems, prototyping and teaching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex gap-4"
              >
                <div className="w-28 flex-shrink-0">
                  <div className="w-28 h-20 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={exp.photo}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                      <p className="text-sm text-slate-500">
                        {exp.organization} {exp.location ? `• ${exp.location}` : ''}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500">
                      <span>{exp.start}{exp.end ? ` — ${exp.end}` : ''}</span>
                    </div>
                  </div>

                  <ul className="mt-3 text-slate-600 list-disc list-inside space-y-1 text-sm">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Workshops Section */}
<section id="workshops" className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        Workshops & <span className="text-amber-400">Sessions</span>
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Selected teaching and workshop activities I've delivered.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {workshops.map((ws) => (
        <motion.div
          key={ws.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Photo */}
          <div className="relative w-full aspect-[16/9] max-h-48 overflow-hidden rounded-t-xl">
            <img
              src={ws.photo}
              alt={ws.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{ws.title}</h3>
            <p className="text-sm text-slate-500 mb-3">{ws.event} • {ws.date}</p>
            <p className="text-slate-600 text-sm mb-3">{ws.summary}</p>
            {ws.link && (
              <a
                href={ws.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-600 hover:underline font-medium"
              >
                Watch / Learn more 
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,139,250,0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Technical <span className="text-rose-400">Expertise</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                My skillset spans embedded systems, machine learning, and full-stack development — with a focus on practical, deployable solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-slate-700">Embedded Systems & Firmware</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-slate-700">AI/ML & Edge Inference</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <span className="text-slate-700">Computer vision</span>
                </div>
              </div>
            </motion.div>

            <SkillsVisualization />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional <span className="text-blue-500">Certifications</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Continuous learning is at the core of my career. Here are some of the professional qualifications I've earned.
          </p>
        </motion.div>

        <CertificationGallery />
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Competitions & <span className="text-amber-400">Achievements</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Recognition from hackathons, coding competitions, and community contributions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: '1',
                name: 'Perabots National Robotics Competition',
                award: 'Finalist',
                date: '2024',
                description:
                  'Selected as a finalist in Perabots, a national-level robotics competition, for designing and implementing a competitive robotic system under real-world constraints.',
                icon: 'trophy' as const
              },
              {
                id: '2',
                name: 'Robofest 2025',
                award: '14th Place (Top 20)',
                date: '2025',
                description:
                  'Secured 14th place among more than 70 registered competitors at Robofest 2025, demonstrating strong problem-solving skills and practical robotics engineering.',
                icon: 'award' as const
              }
            ].map((comp, index) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CompetitionCard competition={comp} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Rishmika Wijewardhana.</p>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
