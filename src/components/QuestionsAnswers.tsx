import React from "react";
import { RatingView } from "react-simple-star-rating";
import {
  Stack,
  Text,
  Icon,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

interface Props {
  name: string;
}

export const QuestionsAnswers = ({ name }: Props) => {
  return (
    <>
      <Stack alignItems="center">
        <Stack
          width={{ base: 800, lg: 1180 }}
          backgroundColor="#fff"
          boxShadow="lg"
          mb="100px"
          borderBottomRadius="5px"
          h="800px"
        >
          <Stack borderTopWidth={1} mx="20px" py="30px">
            <Text fontSize="18px" color="black" fontWeight="400">
              Opiniones sobre {name}
            </Text>
          </Stack>
          <Tabs isLazy w="790px" pt="20px">
            <TabList mx="20px">
              <Tab flex={1} fontWeight="500" borderRadius="2px">
                Todas
              </Tab>
              <Tab flex={1} fontWeight="500" borderRadius="2px">
                Positivas
              </Tab>
              <Tab flex={1} fontWeight="500" borderRadius="2px">
                Negativas
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack px="5px">
                  <Stack mb="15px">
                    <RatingView
                      ratingValue={5}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>Type specimen book</h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>5</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>2</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={2}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      The first line of Lorem Ipsum
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>4</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>1</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={1}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      Contrary to popular belief
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>7</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>2</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack px="5px">
                  <Stack mb="15px">
                    <RatingView
                      ratingValue={3}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      Lorem Ipsum is therefore always free
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      Latin professor at Hampden-Sydney College in Virginia,
                      looked up one of the more obscure Latin words,
                      consectetur, from a Lorem Ipsum
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>1</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>0</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={2}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      If you are going to use a passage of Lorem Ipsum
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      The standard chunk of Lorem Ipsum used since the 1500
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>2</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>1</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={4}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      Rreproduced in their exact original form
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>2</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>2</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack px="5px">
                  <Stack mb="15px">
                    <RatingView
                      ratingValue={0}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      Lanything embarrassing hidden in the middle
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      Randomised words which don't look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>0</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>5</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={1}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>Nam libero tempore</h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut rerum
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>1</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>3</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <RatingView
                      ratingValue={4}
                      fillColor="#3483fa"
                      emptyColor="#cccccc"
                    />
                    <h1 style={{ fontWeight: 500 }}>
                      Being able to do what we like best
                    </h1>
                    <p style={{ color: "rgba(0,0,0,.5)" }}>
                      when our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure is to be welcomed and every pain avoided.
                    </p>
                    <Stack direction="row">
                      <Stack direction="row" mr="20px">
                        <Icon as={AiOutlineLike} fontSize="20px" />
                        <h2>0</h2>
                      </Stack>
                      <Stack direction="row">
                        <Icon as={AiOutlineDislike} fontSize="20px" />
                        <h2>0</h2>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </TabPanel>
              <Text
                mt="20px"
                px="20px"
                color="#3483fa"
                fontSize="14px"
                _hover={{ opacity: 0.9 }}
              >
                Ver todas las opiniones
              </Text>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </>
  );
};
