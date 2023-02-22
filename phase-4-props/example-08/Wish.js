function Wish(props) {
  return (
    <h1 className="head1">
      Good Afternoon {props.name} from {props.from}
    </h1>
  );
}

Wish.defaultProps = {
  name: "Everyone",
  from: "Team~RG",
};
