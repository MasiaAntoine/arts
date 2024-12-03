import { promises as fs } from "fs";
import { join } from "path";

async function copyHtaccess() {
  const src = join(process.cwd(), ".htaccess");
  const dest = join(process.cwd(), "arts", ".htaccess");

  try {
    await fs.copyFile(src, dest);
    console.log(".htaccess file copied to build directory");
  } catch (err) {
    console.error("Error copying .htaccess file:", err);
  }
}

copyHtaccess();
