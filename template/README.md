This template provides the structure to add multiple blocks to a single plugin. On first scaffold, it will create `blocks` directory and a block inside of it that uses the `slug` passed to the commands.

The following command will create a plugins called `example-plugin` with a single block by the same names in the `blocks/example-plugin` directory.

`npx @wordpress/create-block example-plugin --template @ryanwelcher/multi-block-template`

To add another block run the the provide `new-block` script from the root of the plugin and pass the slug of the new block to be created.

`npm run new-block -- another-block`

You may also pass any additional flags to the underlying command as needed:

`npm run new-block -- another-block --namespace my-cool-namespace`
