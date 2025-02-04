import styled from 'styled-components';

export default styled.div`
  grid-area: 1/1/3/2;
  height: calc(100% + 0.35rem);
  padding: 0;
  width: 100%;
  z-index: 10;

  .character-avatar {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    height: 100%;
    padding: 0.75rem 0.25rem 0.25rem;
    width: 100%;

    &__image {
      position: relative;

      img {
        background-color: #15191e;
        border-radius: 50%;
        height: 6.75rem;
        pointer-events: none;
        width: 6.75rem;
      }
    }

    &__experience {
      left: 0;
      position: absolute;
      top: 0;
    }

    &__level {
      background-color: #03131a;
      border-radius: 1rem;
      bottom: 1rem;
      color: #08d7ec;
      font-family: 'Share Tech', sans-serif;
      font-size: 0.875rem;
      min-width: 1rem;
      padding: 0.25em 0.5rem;
      position: absolute;
      right: 1rem;
      transition: color ${({ theme }) => theme.transitions.duration.standard}ms ease-in-out;
    }

    &__name {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &.vip .character-avatar {
    &__level {
      color: #f3d98f;
    }
  }

  &:hover {
    background-color: transparent;
  }
`;
