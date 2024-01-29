/** @type {import('next').NextConfig} */

/*

per https://stackoverflow.com/questions/64639839/typescript-webpack-library-generates-referenceerror-self-is-not-defined

this is intended to fix the compilation issue.

i think it is correct by https://webpack.js.org/configuration/output/#outputglobalobject

but as you can see, it doesnt fix the problem.

*/



const nextConfig = {
	webpack: (
    	config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // config.output.globalObject = 'this'
    // Important: return the modified config
    return config
  },
};


export default nextConfig;
