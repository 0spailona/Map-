export const defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);

export default class Settings {
    constructor(playerSettingsArr) {
        this.playerSettingsChanges = new Map(playerSettingsArr);
    }

    get settings() {
        const playerSettings = new Map(defaultSettings);
        for (const key of playerSettings.keys()) {
            if (this.playerSettingsChanges.has(key) && playerSettings.get(key) !== this.playerSettingsChanges.get(key)) {
                playerSettings.set(key, this.playerSettingsChanges.get(key));
            }
        }
        return playerSettings;
    }
}
