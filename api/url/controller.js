import { success, faliure } from "../../utils/response.js";
import { nanoid } from "nanoid";
import { validateUrl } from "../../utils/utils.js";
import settings from "../../config/index.js";
import { getUrl, saveUrl } from "./services.js";

const base = settings.websiteHost;

export const shortUrlGenerator = async (req, res) => {
  try {
    const { origUrl } = req.body;
    const urlId = nanoid();
    if (!origUrl) return res.json(faliure({}, "Original Url is required", 400));
    if (!validateUrl(origUrl))
      return res.json(faliure({}, "Invalid Original Url", 400));

    const url = await getUrl({ origUrl });

    if (url) {
      return res.json(
        success(url.toJSON(), "short url generated successfully", 200)
      );
    } else {
      const shortUrl = `${base}/${urlId}`;
      const payload = {
        origUrl,
        shortUrl,
      };
      const saveResp = await saveUrl(payload);
      return res.json(
        success(saveResp.toJSON(), "short url generated successfully", 200)
      );
    }
  } catch (error) {
    console.log("error", error.stack);
    return res.json(faliure({}, error.message));
  }
};

export const getOriginalurl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    if (!shortUrl) return res.status(404).json("shortUrl is required");
    let url = await getUrl({ shortUrl:`${base}/${shortUrl}` });
    console.log('url',url)
    if (!url) return res.status(404).json("Not found");
    url = url.toJSON()
    console.log('url',url)
    return res.redirect(url.origUrl);
  } catch (error) {
    console.log("error", error.stack);
    return res.json(faliure({}, error.message));
  }
};
