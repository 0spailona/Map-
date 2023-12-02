import Settings, {defaultSettings} from '../Settings';

test('Get playerSettings', () => {
    const newSet = new Settings([
        ['theme', 'gray'],
        ['music', 'chillout'],
    ]);
    const res = Object.fromEntries(newSet.settings);
    expect(res).toEqual({
        difficulty: 'easy',
        music: 'chillout',
        theme: 'gray',
    });
});

test('Get playerSettings with changing default settings', () => {
    const newSet = new Settings([
        ['theme', 'gray'],
        ['music', 'chillout'],
    ]);
    defaultSettings.set('difficulty', 'not easy');
    const res = Object.fromEntries(newSet.settings);
    expect(res).toEqual({
        difficulty: 'not easy',
        music: 'chillout',
        theme: 'gray',
    });
});
