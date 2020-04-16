/**
 * A small module which automatically hot-swaps changed Lua files in a running LÖVE project.
 *
 * @noSelf
 * @link [Reference](https://github.com/rxi/lurker)
 */
declare module "lurker" {
    /**
     * Automatically detect changed files and hot-swap them into the running project.
     */
    function update(): void;

    /**
     * Looks for files that have changed and hot-swaps them.
     *
     * Manual alternative to update()
     */
    function scan(): void;

    /**
     * A callback which is given the name of the file that will be swapped.
     *
     * If it returns true, the hot-swap is cancelled.
     *
     * @param fileName The name of the file that is being hot-swapped.
     */
    var preswap: (fileName: string) => boolean | void;

    /**
     * @param fileName The name of the file that was hot-swapped.
     */
    var postswap: (fileName: string) => void;

    /**
     * Dictates whether lurker should run in protected mode; this is true by default. If protected mode is disabled then LÖVE's usual error screen is used when an error occurs in a LÖVE callback function; if it is enabled then lurker's error state (which continues watching for file changes and can resume execution) is used. Changes to this variable should be made before any calls to lurker.update() are made.
     */
    var protected: boolean;

    /**
     * Dictates what should happen if lurker tries to load a file which contains a syntax error. If it is false then lurker's error screen is shown until the syntax error is fixed; if it is true the error message is printed to the console and the program continues. lurker.quiet is false by default.
     */
    var quiet: boolean;

    /**
     * The interval in seconds for how often the scan of the directory is performed. This is .5 by default.
     */
    var interval: number;

    /**
     * The directory that is scanned for changes.
     */
    var path: string;
}
