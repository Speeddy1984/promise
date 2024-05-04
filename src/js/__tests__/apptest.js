import GameSavingLoader from '../app'

test('GameSavingLoader.load() returns correct data', async () => {
    const result = await GameSavingLoader.load();
  
    expect(result.id).toBe(9);
    expect(result.created).toBe(1546300800);
    expect(result.userInfo.id).toBe(1);
    expect(result.userInfo.name).toBe('Hitman');
    expect(result.userInfo.level).toBe(10);
    expect(result.userInfo.points).toBe(2000);
  });

  test('catch error', async () => {
    const result = await GameSavingLoader.load();
  
    expect(result.id).toBe(9);
    expect(result.created).toBe(1546300800);
    expect(result.userInfo.id).toBe(1);
    expect(result.userInfo.name).toBe('Hitman');
    expect(result.userInfo.level).toBe(10);
    expect(result.userInfo.points).toBe(2000);
  });