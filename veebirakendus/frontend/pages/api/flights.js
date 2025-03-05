import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "pages","api", "data", "flights.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const flights = JSON.parse(jsonData);

  res.status(200).json(flights);
}
