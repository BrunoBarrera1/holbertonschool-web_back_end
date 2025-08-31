import handleProfileSignup from './6-final-user.js';

const test = async () => {
  const result = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(result);
};

test();
