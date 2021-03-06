/* global describe it */

// eslint-disable-next-line
import { assert } from "chai";
import launchFile from "../../assets/launch";

const launchSettings = [
  "METEOR_INPUT_DIR",
  "METEOR_OUTPUT_DIR",
  "XCODE_SCHEME_NAME",
  "APP_IDENTIFIER",
  "APPLE_ID",
  "FASTLANE_PASSWORD",
  "KEYCHAIN_PASSWORD",
  "CERT_KEY_PATH",
  "CERT_PASSWORD",
  "SLACK_URL",
  "SLACK_ROOM",
  "ANDROID_KEY",
  "ANDROID_STORE_PASS",
  "ANDROID_ZIPALIGN",
  "IOS_HOCKEY_TOKEN",
  "ANDROID_HOCKEY_TOKEN",
  "ANDROID_HOCKEY_ID",
  "PLAY_AUTH_FILE",
  "GALAXY_DEPLOY_HOSTNAME",
  "GALAXY_SESSION_FILE",
];

describe("launch.json", () => {
  launchSettings.map(setting => (
    it(`has ${setting}`, () => {
      assert.isTrue(Object.keys(launchFile).indexOf(setting) > -1);
    })
  ));
});
