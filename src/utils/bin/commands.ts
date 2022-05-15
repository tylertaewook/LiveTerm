// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    // if (i % 7 === 0) {
    //   c += Object.keys(bin).sort()[i - 1] + '\n';
    // } else {
    //   c += Object.keys(bin).sort()[i - 1] + ' ';
    // }
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://tylertaewook.com');
  return 'Opening tylertaewook.com...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest.
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `bin    etc         initrd.img.old  lost+found  proc  snap  usr
boot   home        lib             media       root  srv   var
cdrom  home1       lib32           mnt         run   sys   vmlinuz
dev    initrd.img  lib64           opt         sbin  tmp   vmlinuz.old`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Nah, you're eternally stuck in this directory. 
Just like how I'm still stuck in vim. idk how to exit it :(`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const exit = async (args?: string[]) => {
  window.close();
};

// export const sysinfo = async (args?: string[]): Promise<string> => {
//   return `  System load:  0.0                Processes:           246
//   Usage of /:   71.5% of 48.96GB   Users logged in:     1
//   Memory usage: 6%                 IP address for eth0: 192.168.1.6
//   Swap usage:   0%`;
// };

// Banner
export const banner = (args?: string[]): string => {
  const artStr = String.raw`
  _         _           _                                 _    
 | |_ _   _| | ___ _ __| |_ __ _  _____      _____   ___ | | __
 | __| | | | |/ _ | '__| __/ _' |/ _ \ \ /\ / / _ \ / _ \| |/ /
 | |_| |_| | |  __| |  | || (_| |  __/\ V  V | (_) | (_) |   < 
  \__|\__, |_|\___|_|   \__\__,_|\___| \_/\_/ \___/ \___/|_|\_\  v1.0.3
      |___/                                                    

`;

  const sysInfo = String.raw`

  System load:  0.0                Processes:           ${
    Math.floor(Math.random() * 100) + 1
  }
  Usage of /:   71.5% of 48.96GB   Users logged in:     ${
    Math.floor(Math.random() * 3) + 1
  }
  Memory usage: ${
    Math.floor(Math.random() * 10) + 1
  }%                 IP address for eth0: 192.168.1.0
  Swap usage:   ${Math.floor(Math.random() * 2) + 1}%`;

  return (
    artStr +
    `System information as of ` +
    new Date().toString() +
    sysInfo +
    `

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'gui' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://tylertaewook.com" target="_blank">here</a></u> for my main website.
`
  );
};
