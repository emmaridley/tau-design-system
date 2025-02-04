import type { Meta, StoryObj } from '@storybook/react'; // importing types specific to storybook react
import Item from './Item';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withContainer = (StoryFn: any) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 1.0)', padding: 20, width: 'fit-content' }}>
      <StoryFn />
    </div>
  );
};

const meta: Meta<typeof Item> = {
  // can pass the type of your component as a generic to Meta, and props from Item component will be automatically inferred by that type
  title: 'Items/Item',
  component: Item,
  args: {
    image: 'https://placehold.co/300x300',
    isGeneticallyBound: false,
    isSoldOut: false,
  },
  argTypes: {
    name: { control: 'select', options: ['Ear Piercer', 'Poly Vinyl Coveralls', 'Strong Military Stim V23023'] },
    rarity: { sort: 'requiredFirst', control: 'select', options: ['common', 'epic', 'rare', 'uncommon'] },
    image: {
      table: {
        readonly: true, // Would show the control and display its value but won't make it editable
      },
    },
  },
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['dimension', 'quantity', 'repairLevel', 'showAmount', 'stackSize', 'isButton', 'type', 'image'],
    },
    actions: {
      disable: true,
    },
  },
  tags: ['autodocs'],
  decorators: withContainer,
};

export default meta;
type Story = StoryObj<typeof Item>;

const updateImage = (name: string) => {
  return `${name.replace(/ /g, '-').toLowerCase()}.png`;
};

export const Weapon: Story = {
  render: (args) => {
    const { name } = args;
    const updatedImage = updateImage(name as string);
    return <Item {...args} image={updatedImage} />;
  },
  args: {
    name: 'Ear Piercer',
    rarity: 'uncommon',
    type: 'weapon',
  },
};

export const DamagedWeapon: Story = {
  args: {
    image: 'ear-piercer.png',
    rarity: 'uncommon',
    repairLevel: { exact: 0.9, formatted: '90' },
    type: 'weapon',
  },
};

export const Armor: Story = {
  args: {
    image: 'poly-vinyl-coveralls.png',
    rarity: 'uncommon',
    type: 'armor',
  },
};

export const DamagedArmor: Story = {
  args: {
    image: 'poly-vinyl-coveralls.png',
    rarity: 'uncommon',
    repairLevel: { exact: 0.9, formatted: '90' },
    type: 'armor',
  },
};

export const Medical: Story = {
  args: {
    image: 'strong-military-stim-v23023.png',
    quantity: 2,
    rarity: 'common',
    showAmount: true,
    stackSize: 20,
    type: 'medical',
  },
};

export const SoldOut: Story = {
  args: {
    image: 'poly-vinyl-coveralls.png',
    isSoldOut: true,
    rarity: 'uncommon',
    type: 'armor',
  },
};

export const GeneticallyBound: Story = {
  args: {
    name: 'Poly Vinyl Coveralls',
    image: 'poly-vinyl-coveralls.png',
    isGeneticallyBound: true,
    rarity: 'uncommon',
    type: 'armor',
  },
};
