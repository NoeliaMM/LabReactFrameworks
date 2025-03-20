import React from "react";
import { useParams } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMember } from "./api/api";
import { mapMemberToVM } from "./detail.mappers";
import { Detail } from "./detail.component";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [visible, setVisible] = React.useState<boolean>(false);

  const [member, setMember] = React.useState<MemberDetail>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    getMember(id).then(mapMemberToVM).then(setMember);
  }, [id]);

  return (
    <div>
      <Detail member={member} showInfo={visible} />
      <button onClick={() => setVisible(!visible)}>Toggle info</button>
    </div>
  );
};
