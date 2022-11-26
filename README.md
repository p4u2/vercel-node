# vercel-node
Example NodeJS express app on Vercel.

## Requirements
- [GIT](https://command-not-found.com/git) (optional)
- [NodeJS](https://command-not-found.com/node) for local testing
- [NPM](https://command-not-found.com/npm) to install Node Packages

## Get the code
Clone the Git-Repo or [download it as ZIP](https://github.com/p4u2/vercel-node/archive/refs/heads/main.zip).
```
git clone https://github.com/p4u2/vercel-node.git
```

## Install and run local (optional)
```
npm i      # install
node api   # run local
```

---

## Install Vercel CLI
Signup on [Vercel](https://vercel.com/signup), install the CLI and login.
```
npm i -g vercel
vercel login
```

## Deploy on Vercel
```
vercel
```
If you also want to assign the deployment to your production domain, add the flag.
```
vercel --prod
```

You can checkout this example deployed on vercel
=> https://examplenodejs.vercel.app/
