import styled from "@emotion/styled";

interface PokeNameChipProps {
  name: string;
  id: number;
  color: string;
}

export default function PokeNameChip(props: PokeNameChipProps) {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = "";

    for (let i = 0; i < digits - numberString.length; i++) {
      result += "0";
    }

    return `${result}${numberString}`;
  };

  return (
    <Chip>
      <Number color={props.color}>{renderNumber(props.id)}</Number>
      <ChipText>{props.name}</ChipText>
    </Chip>
  );
}

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  margin-top: 5px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const Number = styled.label<{ color: string }>`
  padding: 0 6px 2px 6px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
`;

const ChipText = styled.label`
  margin: 0 8px 0 5px;
  font-size: 14px;
`;
