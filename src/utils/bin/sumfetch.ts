import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
########################################     sumfetch
GBBBBBBBBB#@@@#BBB#@@@BBBBBG&@@@#BBBBBBB    -----------
          ^@@@!   ~@@@^    ~&@@Y             ABOUT
          ^@@@!   ~@@@^   7@@@J              ${config.name}
          ^@@@!   ~@@@^  ?@@@7               <u><a href="${config.resume_url}" target="_blank">resume</a></u>
          ^@@@!   ~@@@: Y@@&!               爵 <u><a href="https://tylertaewook.com" target="_blank">main_website</a></u>
          ^@@@!   ~@@@^5@@@5                -----------
          ^@@@!   ~@@@B@@@@@~                CONTACT 
          ^@@@!   ~@@@@@PP@@B                <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
          ^@@@!   ~@@@@P .&@@J               <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
          ^@@@!   ~@@@Y   7@@@^              <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
          ^@@@!   ~@@@:    P@@G             -----------
          ^@@@!   ~@@@^    :&@@?             PROJECTS
          ^@@@!   ~@@@^     ?@@&^           ⚪ <u><a href="https://tylertaewook.com/projects/scraft" target="_blank">${config.social.github}/scraft</a></u>
          ^@@@!   ~@@@^      G@@G           ⚪ <u><a href="https://tylertaewook.com/projects/orbitron" target="_blank">${config.social.github}/orbitron</a></u>
          ^@@@!   ~@@@:      ^&@@7          ⚪ <u><a href="https://tylertaewook.com/projects/fashion-hiernet" target="_blank">${config.social.github}/fashion-hiernet</a></u>
`;
};

export default sumfetch;
