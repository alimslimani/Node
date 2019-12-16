import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take moment ...'));// eslint-disable-line no-console 
webpack(webpackConfig).run((err,stats)=>{
    if(err){
        console.log(chalk.red(err));// eslint-disable-line no-console 
        return -1;
    }
    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error=> 
            console.log(chalk.red(error)) // eslint-disable-line no-console 
            );
    }
    if(jsonStats.hasWarnings){
        console.log(chalk.yellow('Webpack generate the following warnings: '));// eslint-disable-line no-console 
        jsonStats.warnings.map(warning =>
            console.log(chalk.yellow(warning))// eslint-disable-line no-console 
            );
    }
    console.log(`Webapck stats: ${stats}`);// eslint-disable-line no-console 

    // if we got this far, the build succeded
    console.log(chalk.green('Your app has been built for production and written to /dist'));// eslint-disable-line no-console 
    return 0;
})