/**
 * Topic.js
 * 
 * This component displays a list of topics for a subject along with its
 * description and a link to its practice problems page. If a subject and topic
 * do not have any practice problems, an error message is displayed.
 * 
 * Note: the topics and descriptions are hardcoded here
 **/

import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Topic() {
  const { subject } = useParams(); // Get the dynamic 'subject' from the URL
  
  // Define subjects and their corresponding topics
  const topics = {
    math: {
      algebra: "Algebra is the study of mathematical symbols and rules for manipulating these symbols. Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum conubia neque urna proin taciti adipiscing platea massa. Sociosqu egestas convallis dolor volutpat posuere ornare. Himenaeos suscipit vulputate vestibulum dolor himenaeos eu risus convallis non. Efficitur elit dictumst nascetur nostra habitant semper sed nibh taciti. Habitasse maecenas duis tempor pellentesque nullam tempor adipiscing ac. Leo porttitor massa; mattis blandit eu enim iaculis porttitor in. Nisl dapibus tempus cursus torquent facilisis venenatis. Ex sem sapien proin morbi nam, commodo est. Consectetur efficitur rutrum finibus neque habitant imperdiet. Consectetur tristique placerat sem nibh mauris; massa suscipit. Dis aptent faucibus integer; erat ultrices ornare aliquam sagittis. Tempus bibendum tempor risus rutrum elementum; cubilia dis primis aenean. Sodales litora vitae taciti; litora cursus auctor nibh nibh. Fermentum vehicula donec ex vivamus felis ipsum sem varius curabitur.",
      geometry: "Geometry is the branch of mathematics concerned with properties and relations of points, lines, surfaces, and solids.",
      calculus: "Calculus is the mathematical study of continuous change, involving derivatives and integrals."
    },
    science: {
      physics: "Physics is the study of matter, energy, and the interactions between them.",
      chemistry: "Chemistry is the branch of science that studies the composition, structure, properties, and change of matter.",
      biology: "Biology is the study of living organisms, divided into many specialized fields that cover their morphology, physiology, anatomy, behavior, and distribution."
    }
  };

  // Get topics for the current subject
  const subjectTopics = topics[subject];

  // If the subject doesn't exist, show an error message
  if (!subjectTopics) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="topic-container">
      <h1>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h1>
      <h2>Topics</h2>
      <ul className="topic-list">

        {/* display each topic */}
        {Object.keys(subjectTopics).map((topic) => (
          <li key={topic} className="topic-item">

            {/* display topic name */}
            <h3>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h3>

            {/* display topic description */}
            <p>{subjectTopics[topic]}</p>

            {/* Link to the practice page for this topic */}
            <Link to={`/${subject}/${topic}`} className="practice-link">
              Go to {topic.charAt(0).toUpperCase() + topic.slice(1)} Practice
            </Link>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Topic;
