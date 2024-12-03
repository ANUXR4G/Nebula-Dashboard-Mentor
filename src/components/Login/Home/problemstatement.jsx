import React from 'react';

const Card = ({ title, description, resources, submissionClosed }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div>
          <h3 className="font-semibold mb-1">Resources:</h3>
          <ul className="list-disc ml-4">
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} className="text-blue-500 hover:underline">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 py-4">
        <button
          className={`w-full py-2 text-white rounded ${
            submissionClosed ? 'bg-red-500' : 'bg-[#4c5d34]'
          }`}
        >
          {submissionClosed ? 'Application Closed' : 'Apply'}
        </button>
      </div>
    </div>
  );
};

const Problemstatement = () => {
  const cards = [
    {
      title: 'Problem Statement - 1',
      description: 'Another problem statement description.',
      resources: [
        { title: 'Resource 1', link: 'https://example.com/resource1' },
        { title: 'Resource 2', link: 'https://example.com/resource2' },
      ],
      submissionClosed: false,
    },
    {
        title: 'Problem Statement - 2',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 3',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 4',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 5',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 6',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 7',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 8',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      {
        title: 'Problem Statement - 9',
        description: 'Another problem statement description.',
        resources: [
          { title: 'Resource 1', link: 'https://example.com/resource1' },
          { title: 'Resource 2', link: 'https://example.com/resource2' },
        ],
        submissionClosed: false,
      },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          resources={card.resources}
          submissionClosed={card.submissionClosed}
        />
      ))}
    </div>
  );
};

export default Problemstatement;