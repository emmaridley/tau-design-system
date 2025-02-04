import type { Meta, StoryObj } from '@storybook/react'; // importing types specific to storybook react
import CharacterAvatar from './CharacterAvatar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withContainer = (StoryFn: any) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 1.0)', padding: 20, width: 'fit-content' }}>
      <StoryFn />
    </div>
  );
};

const meta: Meta<typeof CharacterAvatar> = {
  title: 'Avatars',
  component: CharacterAvatar,
  args: {
    characterImageName: 'square/character-1.png',
    characterProgress: { experience: '1000', level: 1 },
    characterName: 'Character Name',
    isVip: true,
    syndicateTag: 'TAU',
  },
  argTypes: {
    characterImageName: {
      control: 'select',
      options: ['Portia Drax', 'Sho Sien', 'Sophie Loiseau', 'Theadora Ripley', 'Yazema', 'Yoloada Harris'],
    },
  },

  // argTypes: {
  //   name: { control: 'select', options: ['Ear Piercer', 'Poly Vinyl Coveralls', 'Strong Military Stim V23023'] },
  //   rarity: { sort: 'requiredFirst', control: 'select', options: ['common', 'epic', 'rare', 'uncommon'] },
  //   image: {
  //     table: {
  //       readonly: true, // Would show the control and display its value but won't make it editable
  //     },
  //   },
  // },
  // parameters: {
  //   layout: 'centered',
  //   controls: {
  //     exclude: ['dimension', 'quantity', 'repairLevel', 'showAmount', 'stackSize', 'isButton', 'type', 'image'],
  //   },
  //   actions: {
  //     disable: true,
  //   },
  // },
  tags: ['autodocs'],
  decorators: withContainer,
};

export default meta;
type Story = StoryObj<typeof CharacterAvatar>;

const updateImage = (name: string) => {
  return `${name.replace(/ /g, '-').toLowerCase()}.png`;
};

export const AvatarExample: Story = {
  render: (args) => {
    const { characterImageName } = args;
    const updatedImage = updateImage(characterImageName as string);
    return <CharacterAvatar {...args} characterImageName={updatedImage} />;
  },

  args: {
    characterImageName: 'Portia Drax',
    characterProgress: { experience: '1000', level: 1 },
    characterName: 'Jamima',
    isVip: true,
    syndicateTag: 'TAU',
  },
};
