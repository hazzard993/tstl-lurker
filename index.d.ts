declare module "lurker" {
    export function update(): void;
    /**
     * As opposed to using the `lurker.update()` function -- such to avoid the overhead of repeatedly polling for file changes -- you can instead opt to trigger a scan of the directory by calling lurker.scan() manually. If the scan detects any changes a hotswap is performed.
     * @link [lurker.scan()](https://github.com/rxi/lurker#lurkerscan)
     */
    export function scan(): void;
}