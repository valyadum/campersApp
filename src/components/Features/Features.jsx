import { DetailsBtn, ListDetails } from 'components/Details/Details.styled';
import { SvgIcon } from 'components/icons/SvgIcon';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redax/selector';
import {
  ChangePart,
  DescribeContainer,
  DescribeItem,
  Details,
} from './Features.styled';

function Features({ data }) {
  const isLoading = useSelector(selectIsLoading);
  console.log(data);
  const {
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  } = data;

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <ChangePart>
          <ListDetails>
            <DetailsBtn>
              <SvgIcon
                id="persons"
                style={{ fill: '#101828', width: 20, height: 20 }}
              />
              <p> {adults}adults</p>
            </DetailsBtn>
            <DetailsBtn>
              <SvgIcon
                id="automatic"
                style={{
                  fill: 'none',
                  stroke: '#101828',
                  width: 20,
                  height: 20,
                }}
              />
              <p>{transmission}</p>
            </DetailsBtn>
            <DetailsBtn>
              <SvgIcon
                id="air-conditioner"
                style={{
                  fill: 'none',
                  stroke: '#101828',
                  width: 20,
                  height: 20,
                }}
              />
              <p>AC</p>
            </DetailsBtn>
            <DetailsBtn>
              <SvgIcon
                id="petrol"
                style={{ fill: '#101828', width: 20, height: 20 }}
              />
              <p>{engine}</p>
            </DetailsBtn>
            <DetailsBtn>
              <SvgIcon
                id="kitchen"
                style={{
                  fill: 'none',
                  stroke: '#101828',
                  width: 20,
                  height: 20,
                }}
              />
              <p>Kitchen</p>
            </DetailsBtn>
            <DetailsBtn>
              <SvgIcon
                id="beds"
                style={{
                  fill: 'none',
                  stroke: '#101828',
                  width: 20,
                  height: 20,
                }}
              />
              <p>{details?.beds} beds</p>
            </DetailsBtn>
            {details?.airConditioner >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="air-conditioner"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>AC</p>
              </DetailsBtn>
            )}
            {details?.CD >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="cd"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>CD</p>
              </DetailsBtn>
            )}
            {details?.radio >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="radio"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Radio</p>
              </DetailsBtn>
            )}
            <DetailsBtn>
              <SvgIcon
                id="hob"
                style={{
                  fill: 'none',
                  stroke: '#101828',
                  width: 20,
                  height: 20,
                }}
              />
              <p>{details?.hob} hob</p>
            </DetailsBtn>
            {details?.toilet >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="toilet"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Toilet</p>
              </DetailsBtn>
            )}
            {details?.shower >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="shower"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Shower</p>
              </DetailsBtn>
            )}
            {details?.freezer >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="freezer"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Freezer</p>
              </DetailsBtn>
            )}
            {details?.gas >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="gas"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Gas</p>
              </DetailsBtn>
            )}
            {details?.water && (
              <DetailsBtn>
                <SvgIcon
                  id="water"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Water</p>
              </DetailsBtn>
            )}
            {details?.microwave >= 1 && (
              <DetailsBtn>
                <SvgIcon
                  id="microwave"
                  style={{
                    fill: 'none',
                    stroke: '#101828',
                    width: 20,
                    height: 20,
                  }}
                />
                <p>Microwave</p>
              </DetailsBtn>
            )}
          </ListDetails>
          <Details>
            <h4>Vehicle details</h4>
            <hr />
            <DescribeContainer>
              <DescribeItem>
                <p>Form </p>
                <p>{form}</p>
              </DescribeItem>
              <DescribeItem>
                <p>Length </p>
                <p>{length}</p>
              </DescribeItem>
              <DescribeItem>
                <p>Width </p>
                <p>{width}</p>
              </DescribeItem>
              <DescribeItem>
                <p>Height </p>
                <p>{height}</p>
              </DescribeItem>

              <DescribeItem>
                <p>Tank</p>
                <p>{tank}</p>
              </DescribeItem>
              <DescribeItem>
                <p>Consumption</p>
                <p>{consumption}</p>
              </DescribeItem>
            </DescribeContainer>
          </Details>
        </ChangePart>
      )}
    </>
  );
}

export default Features;
