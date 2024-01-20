import * as fs from "fs";
import MarkdownIt from "markdown-it";
import * as util from "util";

const readFileAsync = util.promisify(fs.readFile);

export const getMarkdownContent = async (filePath: string) => {
  try {
    const mdContent = await readFileAsync(filePath, "utf-8");
    const mdParser = new MarkdownIt();
    const htmlContent = mdParser.render(mdContent);
    return htmlContent;
  } catch (error) {
    const message = `Error reading or parsing MD file: ${error.message}`;
    throw new Error(message);
  }
};
