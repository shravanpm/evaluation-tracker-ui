import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvaluationListForInvigilator } from "../../../Redux/EvaluationHomeReducer/action";

export const HomeInstructor = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const user = useSelector((state) => state.authReducer.user);
  const evaluations = useSelector(
    (state) => state.evaluationHomeReducer.evaluations
  );
  console.log(evaluations);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    dispatch(
      getEvaluationListForInvigilator({ invigilatorId: user._id, page, limit })
    );
  }, []);
  return (
    <Box>
      <Box>Instructor</Box>
      <Box>
        {evaluations?.length > 0 && (
          <>
            <Box mt="1em">
              <Box mb="1em">
                <Heading>Evaluations</Heading>
              </Box>

              <>
                {evaluations.map((item) => (
                  <Card key={item._id}>
                    <Flex p="10px" justifyContent={"space-between"}>
                      <Flex
                        justifyContent={"space-between"}
                        w={"70%"}
                        mt="10px"
                      >
                        <Box>
                          <Text>{item?.evaluation?.evaluationName || ""}</Text>
                        </Box>
                        <Flex>
                          <Text>Cut-off mark</Text>
                          <Text color={"green"} ml={"10px"}>
                            {item?.evaluation?.cutOffMark || ""}
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex>
                        <Button colorScheme="teal">View</Button>
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
