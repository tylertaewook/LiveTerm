// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  return `Opening GitHub README...\n
My name is Tyler, a first-year undergrad at Columbia SEAS pursuing towards a B.S. in Computer Science.
My general interest revolves around intertwining Machine Learning and Web Development in which I spark my passion working on ML Web apps such as @scraft-ai.
I'm curently exploring fields like text-mining, arduino-robotics, computer-vision, and reinforcement-learning until I settle onto a single one that I would like to dive deeper.`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
