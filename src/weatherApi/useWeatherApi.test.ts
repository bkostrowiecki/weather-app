import { useWeatherApi } from './useWeatherApi';
import { renderHook } from '@testing-library/react-hooks';
import { weatherApiError404ResponseFixture, weatherApiWarsawResponseFixture } from './weatherApi.fixtures';
import { RequestOptions } from 'http';

const globalFetch = (global as any).fetch;

const fetchMock = {
  mock(path: string, data: object) {
    (global as any).fetch = async (url: string, options: RequestOptions) => {
      if (path === '*' || path === url) {
        return { json: () => data };
      } else {
        return await globalFetch(url, options);
      }
    };
  },
  restore() {
    (global as any).fetch = globalFetch;
  }
};

describe('useWeatherApi', () => {
  afterEach(() => {
      fetchMock.restore();
  });
  

  it('returns valid object when city exists', async () => {
    fetchMock.mock('*', JSON.parse(weatherApiWarsawResponseFixture));

    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi('Warsaw'));

    await waitForNextUpdate();

    expect(result.current).toBeDefined();
  });

  it('returns null when city does not exist', async () => {
    fetchMock.mock('*', JSON.parse(weatherApiError404ResponseFixture));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWeatherApi('NOT EXISTING CITY')
    );

    await waitForNextUpdate();

    expect(result.current).toEqual(null);
  });

  it('returns undefined when loading', async () => {
    fetchMock.mock('*', JSON.parse(weatherApiWarsawResponseFixture));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWeatherApi('Warsaw')
    );

    expect(result.current).toEqual(undefined);

    await waitForNextUpdate();
  });

  it('does not do anything if search name is empty', (done: jest.DoneCallback) => {
    fetchMock.mock('*', JSON.parse(weatherApiWarsawResponseFixture));
        const { result, waitForNextUpdate } = renderHook(() =>
            useWeatherApi('')
        );

        const promise = waitForNextUpdate();
        promise.then(() => {
            expect(true).toEqual('This assertion should failed because it should never be called!');
        });

        setTimeout(() => {
            expect(true).toEqual(true);
            done();
        }, 1);
  })
});
