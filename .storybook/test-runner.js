import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { getStoryContext } from '@storybook/test-runner';

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const EXCLUDED_STORIES = ['Custom/molecules/LineClampContainer'];

export default {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postRender(page, context) {
    if (EXCLUDED_STORIES.includes(context.title)) {
      return;
    }
    await new Promise((r) => setTimeout(r, 1000));
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
  async preRender(page, story) {
    const context = await getStoryContext(page, story);
    const viewPortParams = context.parameters?.viewport;
    const defaultViewport = viewPortParams?.defaultViewport;
    const viewport = defaultViewport && viewPortParams.viewports[defaultViewport].styles;

    const parsedViewportSizes =
      viewport &&
      Object.entries(viewport).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          [screen]: parseInt(size),
        }),
        {},
      );

    if (parsedViewportSizes) page.setViewportSize(parsedViewportSizes);
  },
};
